import React from "react";

const FormTextArea: React.FC<{
  cssClasses: string;
  placeholder: string;
  id: string;
  rows: number;
}> = (props) => {
  const { cssClasses, placeholder, id, rows } = props;

  return (
    <textarea
      className={cssClasses}
      placeholder={placeholder}
      id={id}
      rows={rows}
      maxLength={400}
    ></textarea>
  );
};

export default FormTextArea;
