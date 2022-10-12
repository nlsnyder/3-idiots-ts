import React from "react";
import ReactDOM from "react-dom";

import '../../assets/css/navigation/Overlay.css';

const Overlay: React.FC<{toggle: () => void, isMobile?: boolean}> = (props) => {
  const overlay = <div className={`overlay ${props.isMobile ? 'd-sm-none' : ''}`} onClick={props.toggle}></div>
  
  return ReactDOM.createPortal(overlay, document.getElementById('overlay') as HTMLInputElement);
};

export default Overlay;