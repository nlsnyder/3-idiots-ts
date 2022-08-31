import React from "react";
import styles from "./SubHeading.module.css";

const SubHeading: React.FC<{ title: string; sectionHeading: string }> = (
  props
) => {
  return (
    <div className={styles["section-header"]}>
      <span>{props.sectionHeading}</span>
      <h2>{props.title}</h2>
    </div>
  );
};

export default SubHeading;
