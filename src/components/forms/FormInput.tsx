import React from "react";
import '../../assets/css/forms/Form.css';

const FormInput: React.FC<{
  type: string;
  classes: string;
  id: string;
  placeholder: string;
}> = (props) => {
  const { type, classes, id, placeholder } = props;

  return <input type={type} className={classes} id={id} placeholder={placeholder} />;
};

export default FormInput;
