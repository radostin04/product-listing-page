import ReactDOM from "react-dom";

import classes from "./Overlay.module.css";

interface OverlayProps {
  children: JSX.Element | JSX.Element[];
  portalElementID: string;
  onClose: React.MouseEventHandler<HTMLDivElement>;
  isClickthrough?: boolean
}

const Overlay: React.FC<OverlayProps> = ({ children, portalElementID, onClose, isClickthrough}) => {
  const modalDOMNode = document.getElementById(portalElementID);
  if (!modalDOMNode) {
    return <p>HTML Element with ID {portalElementID} not found - cannot insert modal!</p>;
  }

  //event.stopPropagation() prevents events from above from applying on child components
  return ReactDOM.createPortal(
    <div className={`${classes.overlay} ${isClickthrough ? classes.isClickthrough : ""}` } onClick={onClose} data-testid="genericOverlay">
      {children}
    </div>,
    modalDOMNode
  );
};

export default Overlay;