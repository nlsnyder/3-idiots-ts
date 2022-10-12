import React, { useState, useCallback } from "react";

const FormTextArea: React.FC<{
  cssClasses: string;
  placeholder: string;
  id: string;
  rows: number;
  validators: { (val: string): boolean }[];
  onValidateText: (validity: object) => void;
  errorText: string;
}> = (props) => {
  const { cssClasses, placeholder, id, rows, onValidateText, validators } =
    props;
  const [isValid, setIsValid] = useState(true);

  const blurTextareaHandler = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
    let validField = true;
    for (const validator of validators) {
      validField = validField && validator(e.target.value);
    }

    setIsValid(validField);

    onValidateText({type: 'message', val: validField});
  }, [onValidateText, validators]);

  return (
    <>
      <textarea
        className={`${cssClasses} ${!isValid ? 'input-error' : ''}`}
        placeholder={placeholder}
        id={id}
        rows={rows}
        maxLength={600}
        onBlur={blurTextareaHandler}
      ></textarea>
      {!isValid && <p className="has-error">{props.errorText}</p>}
    </>
  );
};

export default FormTextArea;
