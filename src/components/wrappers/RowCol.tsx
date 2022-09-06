import React from "react";

const RowCol: React.FC<{
  children: React.ReactNode;
  rowClasses: string;
  colClasses: string;
}> = (props) => {
  const { children, rowClasses, colClasses } = props;

  return (
    <div className={rowClasses}>
      <div className={colClasses}>{children}</div>
    </div>
  );
};

export default RowCol;
