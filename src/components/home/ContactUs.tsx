import React from "react";
import * as Yup from "yup";

import SubHeading from "../layout/SubHeading";
import RowCol from "../wrappers/RowCol";

import "../../assets/css/home/ContactUs.css";
import "../../assets/css/forms/Form.css";
import "../../assets/css/ui/Modal.css";
import { ContactInitValues } from "../../models/interfaces/form-interfaces";
import { OptionalObjectSchema } from "yup/lib/object";
import ContactForm from "../forms/ContactForm";

const ContactUsForm: React.FC<{}> = (props) => {
  const initialValues: ContactInitValues = {
    name: "",
    email: "",
    heardFrom: "SPOTIFY",
    whereFrom: "USA",
    message: "",
  };

  const contactSchema: OptionalObjectSchema<any> = Yup.object({
    name: Yup.string().required("Name is required."),
    email: Yup.string()
      .email("Please enter a valid email address.")
      .required("Email is required."),
    message: Yup.string()
      .min(5, "Message must be at least 5 characters")
      .max(400, "Message must be less than 400 characters.")
      .required("Message is required"),
  });

  const formProps = {
    initialValues,
    contactSchema,
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
          <ContactForm {...formProps} />
        </RowCol>
      </div>
    </>
  );
};

export default ContactUsForm;
