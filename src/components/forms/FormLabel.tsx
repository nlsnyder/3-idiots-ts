import React from "react";
import '../../assets/css/forms/Form.css';

const FormLabel: React.FC<{
  label: string;
  labelFor: string;
  classes: string;
  hasError?: boolean
}> = (props) => {
  const { label, labelFor, classes, hasError } = props;

  return (
    <label htmlFor={labelFor} className={`${classes} ${hasError ? 'label-error' : ''}`}>
      {label}
    </label>
  );
};

export default FormLabel;
