import React, { useState } from "react";
import Modal from "../components/modal/modal.component";

type useModalType = {
  Modal: React.FC;
  active: boolean;
  disableModal: () => void;
  activeModal: () => void;
};

const useModal = (): useModalType => {
  const [active, setActive] = useState<boolean>(false);
  const disableModal = () => setActive(false);
  const activeModal = () => setActive(true);
  const Component: React.FC = ({ children }) => (
    <Modal active={active} disableModal={disableModal}>
      {children}
    </Modal>
  );
  return {
    active,
    Modal: Component,
    disableModal,
    activeModal,
  };
};

export default useModal;
