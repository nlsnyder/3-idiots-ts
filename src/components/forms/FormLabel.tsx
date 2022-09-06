import React from "react";
import './Form.css';

const FormLabel: React.FC<{
  label: string;
  labelFor: string;
  classes: string;
}> = (props) => {
  const { label, labelFor, classes } = props;

  return (
    <label htmlFor={labelFor} className={classes}>
      {label}
    </label>
  );
};

export default FormLabel;
