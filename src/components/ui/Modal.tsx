import React, { ReactNode } from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";

import Overlay from "../navigation/Overlay";

import "../../assets/css/ui/Modal.css";

const Modal: React.FC<{
  show: boolean;
  header: string;
  footer: any;
  children: ReactNode;
  onClose: () => void;
}> = (props) => {
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
        <header className="custom-modal-header">
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
