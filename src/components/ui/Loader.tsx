import React from "react";
import ReactDOM from "react-dom";
import Overlay from "../navigation/Overlay";

import "../../assets/css/ui/Loader.css";

const LoadingSpinner = () => {
  let content = <div className="loader"></div>;

  return ReactDOM.createPortal(
    content,
    document.getElementById("loading") as HTMLElement
  );
};

const Loader = () => {
  return (
    <>
      <Overlay />
      <LoadingSpinner />
    </>
  );
};

export default Loader;
