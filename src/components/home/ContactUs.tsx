import React from "react";

import FormGroup from "../forms/FormGroup";
import FormLabel from "../forms/FormLabel";
import SubHeading from "../layout/SubHeading";
import RowCol from "../wrappers/RowCol";
import FormSelect from "../forms/FormSelect";
import FormTextArea from "../forms/FormTextArea";

import "../../assets/css/home/ContactUs.css";
import "../../assets/css/forms/Form.css";

import { HeardFromOptions, WhereFromOptions } from "../../data/constants";

const ContactUs: React.FC<{}> = (props) => {
  return (
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
        <form id="contact" className={`row mt-4 gx-5 gy-4 contactForm`}>
          <div className="d-flex justify-content-center align-items-center m-0">
            <SubHeading sectionHeading={null} title="Contact" />
          </div>
          <div className="col-12 mb-4">
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
            />
          </div>
          <div className="col-12 col-lg-6">
            <FormGroup
              formLabel="Email:"
              formInputId="email"
              inputType="email"
              inputClasses="form-control form-control-override"
              inputPlaceholder="example@gmail.com"
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
            />
            <FormTextArea
              cssClasses="form-control form-control-override"
              placeholder="Message..."
              id="feedback"
              rows={5}
            />
          </div>
          {/* submit button */}
          <div className="col-12 d-flex justify-content-center justify-content-sm-start">
            <button type="submit" className="primaryButton">
              Submit
            </button>
          </div>
        </form>
      </RowCol>
    </div>
  );
};

export default ContactUs;
