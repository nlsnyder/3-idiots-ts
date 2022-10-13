import React, { useReducer, useState } from "react";

import FormGroup from "../forms/FormGroup";
import FormLabel from "../forms/FormLabel";
import SubHeading from "../layout/SubHeading";
import RowCol from "../wrappers/RowCol";
import FormSelect from "../forms/FormSelect";
import FormTextArea from "../forms/FormTextArea";
import Modal from "../ui/Modal";

import "../../assets/css/home/ContactUs.css";
import "../../assets/css/forms/Form.css";

import { faCheck } from "@fortawesome/free-solid-svg-icons";

import { VALIDATE_EMAIL, VALIDATE_REQUIRED } from "../../util/form-validators";

import { HeardFromOptions, WhereFromOptions } from "../../data/constants";
import Loader from "../ui/Loader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const formReducer = (state: any, action: any) => {
  switch (action.type) {
    case "name":
      return {
        ...state,
        name: action.val,
        formIsValid: state.message.valid && state.email && action.val,
      };
    case "email":
      return {
        ...state,
        email: action.val,
        formIsValid: state.message.valid && state.name && action.val,
      };
    case "message":
      return {
        ...state,
        message: { touched: true, valid: action.val },
        formIsValid: state.name && state.email && action.val,
      };
    default:
      return state;
  }
};

const ContactUs: React.FC<{}> = (props) => {
  const [formValidity, dispatch] = useReducer(formReducer, {
    name: false,
    email: false,
    message: { touched: false, valid: false },
    formIsValid: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const validateForm = (validObj: object) => {
    dispatch(validObj);
  };

  const formSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsSubmitting(true);
    setShowModal(true);
  };

  const closeModalHandler = () => {
    setShowModal(false);
    setIsSubmitting(false);
  };

  return (
    <>
      <Modal
        show={showModal}
        header="Success"
        onClose={closeModalHandler}
        footer={
          <button onClick={closeModalHandler} className="secondaryButton">
            Close
          </button>
        }
      >
        <FontAwesomeIcon icon={faCheck} className="success-icon" />
        <p>Your feedback has been received!</p>
      </Modal>
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
          <form
            id="contact"
            className={`row mt-4 gx-5 gy-4 contactForm`}
            onSubmit={formSubmitHandler}
          >
            <div className="d-flex justify-content-center align-items-center m-0">
              <SubHeading sectionHeading={null} title="Contact" />
            </div>
            <div className="col-12 mb-5">
              <p>
                Please tell us what you enjoy most about the podcast or any
                feedback on how we can improve below
              </p>
            </div>
            {/* Two form inputs of name and email */}
            <div className="col-12 col-lg-6 form-group">
              <FormGroup
                formLabel="Name:"
                formInputId="name"
                inputType="text"
                inputClasses="form-control form-control-override"
                inputPlaceholder="ex. John Smith"
                validators={[VALIDATE_REQUIRED]}
                onValidateForm={validateForm}
                errorText="Your name is required."
              />
            </div>
            <div className="col-12 col-lg-6">
              <FormGroup
                formLabel="Email:"
                formInputId="email"
                inputType="email"
                inputClasses="form-control form-control-override"
                inputPlaceholder="example@gmail.com"
                validators={[VALIDATE_EMAIL, VALIDATE_REQUIRED]}
                onValidateForm={validateForm}
                errorText="Please enter a valid email."
              />
            </div>
            {/* Two form inputs of where are you from and how did you hear about us */}
            <div className="col-12 col-lg-6">
              <FormLabel
                label="How did you hear about us?"
                labelFor="heardFrom"
                classes="form-label d-flex"
              />
              <FormSelect
                cssClasses="form-select form-control-override"
                aria="Select how you heard about us"
                options={HeardFromOptions}
                selectId="heardFrom"
              />
            </div>
            <div className="col-12 col-lg-6">
              <FormLabel
                label="Where are you from?"
                labelFor="whereFrom"
                classes="form-label d-flex"
              />
              <FormSelect
                cssClasses="form-select form-control-override"
                aria="Select where you're from"
                options={WhereFromOptions}
                selectId="whereFrom"
              />
            </div>
            {/* One form input of message */}
            <div className="col-12">
              <FormLabel
                label="Your feedback"
                labelFor="feedback"
                classes="form-label d-flex"
                hasError={
                  formValidity.message.touched
                    ? !formValidity.message.valid
                    : false
                }
              />
              <FormTextArea
                cssClasses="form-control form-control-override"
                placeholder="Message..."
                id="feedback"
                rows={5}
                errorText="Message is required."
                validators={[VALIDATE_REQUIRED]}
                onValidateText={validateForm}
              />
            </div>
            {isSubmitting && <Loader />}
            {/* submit button */}
            <div className="col-12 d-flex justify-content-center justify-content-sm-start">
              <button
                disabled={!formValidity.formIsValid}
                type="submit"
                className={
                  formValidity.formIsValid ? "primaryButton" : "disabledButton"
                }
              >
                Submit
              </button>
            </div>
          </form>
        </RowCol>
      </div>
    </>
  );
};

export default ContactUs;
