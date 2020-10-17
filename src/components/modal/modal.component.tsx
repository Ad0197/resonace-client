import React from "react";
import "./modal.styles.scss";

type ModalProps = {
    active: boolean,
    disableModal: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
}

const Modal: React.FC<ModalProps> = ({ children, active = false, disableModal }) => (
  <div className={`modal-background ${active ? "active" : "disable"}`} onClick={disableModal}>
    <div className="modal">{children}</div>
  </div>
);

export default Modal;
