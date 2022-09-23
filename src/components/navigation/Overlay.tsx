import React from "react";
import ReactDOM from "react-dom";
import './Overlay.css';

const Overlay: React.FC<{toggleNav: () => void}> = (props) => {
  const overlay = <div className="overlay d-sm-none" onClick={props.toggleNav}></div>
  
  return ReactDOM.createPortal(overlay, document.getElementById('overlay') as HTMLInputElement);
};

export default Overlay;