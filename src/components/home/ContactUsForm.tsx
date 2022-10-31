import React from "react";
import { Field, Form, Formik, ErrorMessage, FormikHelpers } from "formik";
import * as Yup from "yup";

import SubHeading from "../layout/SubHeading";
import RowCol from "../wrappers/RowCol";
import FormLabel from "../forms/FormLabel";

import "../../assets/css/home/ContactUs.css";
import "../../assets/css/forms/Form.css";
import "../../assets/css/ui/Modal.css";
import { ContactInitValues } from "../../models/interfaces/form-interfaces";
import { HeardFromOptions, WhereFromOptions } from "../../data/constants";

const ContactUsForm: React.FC<{}> = (props) => {
  const initialValues: ContactInitValues = {
    name: "",
    email: "",
    heardFrom: "SPOTIFY",
    whereFrom: "USA",
    message: "",
  };

  const contactSchema = Yup.object({
    name: Yup.string().required("Name is required."),
    email: Yup.string()
      .email("Please enter a valid email address.")
      .required("Email is required."),
    message: Yup.string()
      .min(5, "Message must be at least 5 characters")
      .max(400, "Message must be less than 400 characters.")
      .required("Message is required"),
  });

  const formSubmitHandler = (
    values: ContactInitValues,
    formikHelpers: FormikHelpers<ContactInitValues>
  ) => {
    console.log(values);
    formikHelpers.setSubmitting(false);
    formikHelpers.resetForm();
  };

  return (
    <>
      <div id="contact-us">
        <RowCol
          rowClasses="row justify-content-center"
          colClasses="col-11 col-sm-10"
        >
          <SubHeading
            sectionHeading="Contact us"
            title="We want to hear from you"
          />
        </RowCol>
        <RowCol
          rowClasses="row justify-content-center mt-4 formMargin"
          colClasses="col-10 col-sm-8"
        >
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
                  <ErrorMessage
                    className="has-error"
                    component="p"
                    name="name"
                  />
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
                  <ErrorMessage
                    className="has-error"
                    component="p"
                    name="email"
                  />
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
        </RowCol>
      </div>
    </>
  );
};

export default ContactUsForm;
