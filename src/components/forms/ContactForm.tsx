import { useState } from "react";
import useAxios from "../../hooks/useAxios";
import { ErrorMessage, Field, Form, Formik, FormikHelpers } from "formik";
import { OptionalObjectSchema } from "yup/lib/object";

import { WhereFromOptions, HeardFromOptions } from "../../data/constants";
import { ContactInitValues } from "../../models/interfaces/form-interfaces";
import { defaultAxiosParams } from "../../data/http-constants";
import SubHeading from "../layout/SubHeading";
import Loader from "../ui/Loader";
import FormLabel from "./FormLabel";

import "../../assets/css/ui/Modal.css";
import "../../assets/css/forms/Form.css";
import Modal from "../ui/Modal";
import ErrorsList from "../ui/ErrorsList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

export const ContactForm: React.FC<{
  initialValues: ContactInitValues;
  contactSchema: OptionalObjectSchema<any>;
}> = (props) => {
  const [showFormModal, setShowFormModal] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");
  const { isLoading, errors, sendRequest } = useAxios();
  const { initialValues, contactSchema } = props;

  const formSubmitHandler = async (
    values: ContactInitValues,
    formikHelpers: FormikHelpers<ContactInitValues>
  ) => {
    const axiosParams = { ...defaultAxiosParams };

    axiosParams.url = axiosParams.url + "/api/contact/email";
    axiosParams.method = "POST";
    axiosParams.data = { ...values };

    const res = await sendRequest(axiosParams);
    setResponseMessage(res?.message);

    formikHelpers.resetForm();
    formikHelpers.setSubmitting(false);
    setShowFormModal(true);
  };

  const closeModal = () => {
    setShowFormModal(false);
    setResponseMessage("");
  };

  return (
    <>
      {
        <Modal
          show={showFormModal}
          header={errors ? "Error" : "Success"}
          type={errors ? "error" : "confirmation"}
          footer={
            <button className="btnCommon" onClick={closeModal}>
              Close
            </button>
          }
          onClose={closeModal}
        >
          {errors ? (
            <ErrorsList errors={errors} />
          ) : (
            <div className="success-message">
              <FontAwesomeIcon icon={faCheck} className="success-icon" />
              <p>{responseMessage}</p>
            </div>
          )}
        </Modal>
      }
      {isLoading && <Loader />}
      <Formik
        initialValues={initialValues}
        validationSchema={contactSchema}
        onSubmit={(values, helpers) => formSubmitHandler(values, helpers)}
      >
        {({ isSubmitting, errors, touched }) => (
          <Form className="row mt-4 gx-5 gy-4 contactForm">
            <div className="d-flex justify-content-center align-items-center m-0">
              <SubHeading sectionHeading={null} title="Contact" />
            </div>
            <div className="col-12 mb-5">
              <p className="contact-form-description">
                Please tell us what you enjoy most about the podcast or any
                feedback on how we can improve below
              </p>
            </div>
            <div className="col-12 col-lg-6 form-group">
              <FormLabel
                label="Name"
                labelFor="name"
                classes="form-label required d-flex"
              />
              <Field
                name="name"
                className={`form-control form-control-override ${
                  errors.name && touched.name && "input-error"
                }`}
                placeholder="ex. John Doe"
              />
              <ErrorMessage className="has-error" component="p" name="name" />
            </div>
            <div className="col-12 col-lg-6 form-group">
              <FormLabel
                label="Email"
                labelFor="email"
                classes="form-label required d-flex"
              />
              <Field
                name="email"
                className={`form-control form-control-override ${
                  errors.email && touched.email && "input-error"
                }`}
                placeholder="example@gmail.com"
              />
              <ErrorMessage className="has-error" component="p" name="email" />
            </div>
            <div className="col-12 col-lg-6">
              <FormLabel
                label="How did you hear about us?"
                labelFor="heardFrom"
                classes="form-label d-flex"
              />
              <Field
                name="heardFrom"
                as="select"
                aria-label="Select how you heard about us"
                className="form-select form-control-override"
              >
                {HeardFromOptions.map((option, index) => {
                  return (
                    <option key={index} value={option.value}>
                      {option.name}
                    </option>
                  );
                })}
              </Field>
            </div>
            <div className="col-12 col-lg-6">
              <FormLabel
                label="Where are you from?"
                labelFor="whereFrom"
                classes="form-label d-flex"
              />
              <Field
                name="whereFrom"
                as="select"
                aria-label="Select where you're from"
                className="form-select form-control-override"
              >
                {WhereFromOptions.map((option, index) => {
                  return (
                    <option key={index} value={option.value}>
                      {option.name}
                    </option>
                  );
                })}
              </Field>
            </div>
            <div className="col-12">
              <FormLabel
                label="Your feedback"
                labelFor="feedback"
                classes="form-label required d-flex"
              />
              <Field
                name="message"
                className={`form-control form-control-override ${
                  errors.message && touched.message && "input-error"
                }`}
                as="textarea"
                rows={5}
                placeholder="Message..."
              />
              <ErrorMessage
                className="has-error"
                component="p"
                name="message"
              />
            </div>

            {/* submit button */}
            <div className="col-12 d-flex justify-content-center justify-content-sm-start">
              <button
                type="submit"
                className="primaryButton"
                disabled={isSubmitting}
              >
                Submit
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default ContactForm;
