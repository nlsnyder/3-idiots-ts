import React from "react";
import "../../assets/css/forms/Form.css";

const FormInput: React.FC<{
  type: string;
  classes: string;
  id: string;
  placeholder: string;
  onInput: (field: string) => void;
  errorText: string;
  error: boolean;
}> = (props) => {
  const { type, classes, id, placeholder, onInput } = props;

  const inputBlurHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onInput(e.target.value);
  };

  return (
    <>
      <input
        type={type}
        className={`${classes} ${props.error ? "input-error" : ''}`}
        id={id}
        placeholder={placeholder}
        onBlur={inputBlurHandler}
      />
      {props.error && <p className="has-error">{props.errorText}</p>}
    </>
  );
};

export default FormInput;
