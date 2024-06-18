import css from "./ImageModal.module.css";
import { IoIosClose } from "react-icons/io";
import { modalStyles } from "../../utils/modalStyles";
import Modal from "react-modal";
import { IImageModalProps } from "./ImageModal.types";

Modal.setAppElement("#root");

const ImageModal = ({ photo, isModalOpen, closeModal }: IImageModalProps) => {
  return (
    <Modal isOpen={isModalOpen} onRequestClose={closeModal} style={modalStyles}>
      {photo && (
        <div className={css.modal}>
          <button
            className={css.closeBtn}
            onClick={closeModal}
            aria-label="close modal"
          >
            <IoIosClose />
          </button>
          <img src={photo.urls.regular} alt={photo.alt_description} />
        </div>
      )}
    </Modal>
  );
};

export default ImageModal;
