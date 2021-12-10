import { useState, useEffect } from "react";

import ReactModal from "react-modal";

const Modal = ({ children, isOpen, setIsOpen }) => {
  const [modalStatus, setModalStatus] = useState(isOpen);

  useEffect(() => {
    setModalStatus(isOpen);
  }, [isOpen]);

  return (
    <ReactModal
      shouldCloseOnOverlayClick={true}
      onRequestClose={setIsOpen}
      isOpen={modalStatus}
      ariaHideApp={false}
      style={{
        content: {
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          marginRight: "-50%",
          transform: "translate(-50%, -50%)",
          background: "#fff",
          color: "#333",
          borderRadius: "8px",
          width: "536px",
          border: "none",
          padding: "48px",
        },
        overlay: {
          backgroundColor: "var(--purple-shadow)",
        },
      }}
    >
      {children}
    </ReactModal>
  );
};

export default Modal;
