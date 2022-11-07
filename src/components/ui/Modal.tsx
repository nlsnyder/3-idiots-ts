import React, { ReactNode } from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";

import Overlay from "../navigation/Overlay";

import "../../assets/css/ui/Modal.css";

const Modal: React.FC<{
  show: boolean;
  type?: "error" | "confirmation";
  header: string;
  footer: any;
  children: ReactNode;
  onClose: () => void;
}> = (props) => {
  let headerColor;
  switch(props.type) {
    case "error":
      headerColor = "error-header";
      break;
    case "confirmation":
      headerColor = "confirmation-header"
      break;
    default:
      headerColor = "default-header";
      break;
  }

  const content = (
    <>
    {props.show && <Overlay toggle={props.onClose} />}
    <CSSTransition
      in={props.show}
      mountOnEnter
      unmountOnExit
      timeout={200}
      classNames="modal-anim"
    >
      <div className="custom-modal">
        <header className={`custom-modal-header ${headerColor}`}>
          <h2>{props.header}</h2>
        </header>
        <div className="custom-modal-body">{props.children}</div>
        <footer className="modal-footer">{props.footer}</footer>
      </div>
    </CSSTransition>
    </>
  );

  return ReactDOM.createPortal(
    content,
    document.getElementById("modal") as HTMLElement
  );
};

export default Modal;
