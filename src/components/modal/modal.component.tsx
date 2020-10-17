import React from "react";
import "./modal.styles.scss";

type ModalProps = {
  active: boolean;
  disableModal: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  backgroundDisable?: boolean;
};

const Modal: React.FC<ModalProps> = ({
  children,
  active = false,
  disableModal,
  backgroundDisable,
}) => (
  <>
    <div
      className={`modal-background ${active ? "active" : "disable"}`}
      onClick={backgroundDisable ? undefined : disableModal}
    >
      <div className={`modal ${active ? "active" : "disable"}`}>{children}</div>
    </div>
  </>
);

export default Modal;
