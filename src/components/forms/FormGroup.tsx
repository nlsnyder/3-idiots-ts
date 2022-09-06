import React from "react";
import FormLabel from "./FormLabel";
import FormInput from "./FormInput";

const FormGroup: React.FC<{
  formLabel: string;
  formInputId: string;
  inputType: string;
  inputClasses: string;
  inputPlaceholder: string;
}> = (props) => {
  return (
    <>
      <FormLabel
        label={props.formLabel}
        labelFor={props.formInputId}
        classes="form-label d-flex"
      />
      <FormInput
        type={props.inputType}
        classes={props.inputClasses}
        id={props.formInputId}
        placeholder={props.inputPlaceholder}
      />
    </>
  );
};

export default FormGroup;
