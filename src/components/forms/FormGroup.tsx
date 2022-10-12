import React, { useState, useCallback } from "react";
import FormLabel from "./FormLabel";
import FormInput from "./FormInput";

import "../../assets/css/forms/Form.css";

const FormGroup: React.FC<{
  formLabel: string;
  formInputId: string;
  inputType: string;
  inputClasses: string;
  inputPlaceholder: string;
  validators: { (val: string): boolean; } [],
  onValidateForm: (validity: object) => void,
  errorText: string
}> = (props) => {
  const [isValid, setIsValid] = useState(true);
  const { validators, onValidateForm, formInputId } = props;

  const validateChange = useCallback((value: string) => {
    let validField = true;
    for (const validator of validators) {
      validField = validField && validator(value);
    }

    setIsValid(validField);

    onValidateForm({type: formInputId, val: validField});
  }, [validators, onValidateForm, formInputId]);

  return (
    <>
      <FormLabel
        label={props.formLabel}
        labelFor={props.formInputId}
        classes={`form-label d-flex ${!isValid ? "has-error" : ''}`}
      />
      <FormInput
        type={props.inputType}
        classes={props.inputClasses}
        id={props.formInputId}
        placeholder={props.inputPlaceholder}
        onInput={validateChange}
        errorText={props.errorText}
        error={!isValid}
      />
    </>
  );
};

export default FormGroup;
