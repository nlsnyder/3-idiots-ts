import React from "react";
import styles from "./SubHeading.module.css";

const SubHeading: React.FC<{ title: string; sectionHeading: string | null }> = (
  props
) => {
  return (
    <div className={styles["section-header"]}>
      {props.sectionHeading && <span>{props.sectionHeading}</span>}
      <h2>{props.title}</h2>
    </div>
  );
};

export default SubHeading;
