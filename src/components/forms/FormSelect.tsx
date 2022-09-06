import React from "react";
import { SelectOption } from "../../interfaces/interfaces";

const FormSelect: React.FC<{
  cssClasses: string;
  options: SelectOption[];
  aria: string;
  selectId: string;
}> = (props) => {
  const { cssClasses, options, aria, selectId } = props;

  return (
    <select className={cssClasses} aria-label={aria} id={selectId} defaultValue={options[0].value} required>
      {options.map((option, index) => {
        return (
          <option
            key={index}
            value={option.value}
            disabled={index === 0 ? true : false}
          >
            {option.name}
          </option>
        );
      })}
    </select>
  );
};

export default FormSelect;
