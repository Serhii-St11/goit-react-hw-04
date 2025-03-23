import Modal from "react-modal";
import { AiOutlineCloseCircle } from "react-icons/ai";
import clsx from "clsx";
import css from "./imageModal.module.css";

Modal.setAppElement("#root");

export default function ImageModal({ isOpen, image, onClose }) {
  if (!image) return null;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Image Modal"
      style={{
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.7)",
        },
        content: {
          maxWidth: "1200px",
          maxHeight: "1000px",
          margin: "auto",
          padding: "5px",
          borderRadius: "10px",
          textAlign: "center",
          backgroundColor: "white",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        },
      }}
    >
      <button onClick={onClose} className={clsx(css.closeButton)}>
        <AiOutlineCloseCircle size={28} />
      </button>
      <img
        className={clsx(css.img)}
        src={image.urls.regular}
        alt={image.alt_description}
      />
      <p className={clsx(css.text)}>{image.alt_description}</p>
    </Modal>
  );
}
