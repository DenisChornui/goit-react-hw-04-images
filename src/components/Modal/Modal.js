import Modal from 'react-modal';
import { customStyles } from './Modal.styled';

Modal.setAppElement('#root');

export const ModalWindow = ({ isModalOpen, closeModal, image }) => {
  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <img
        src={image.largeImageURL}
        alt={image.tags}
        width="840px"
        height="700px"
      />
    </Modal>
  );
};
