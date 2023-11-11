import { useState } from 'react';
import { ModalWindow } from 'components/Modal/Modal';
import { ImageGalleryItemStyled, ImgStyled } from './ImageGalleryItem.styled';


export const ImageGalleryItem =({image}) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

 const openModal = () => {
  setIsModalOpen(true)
  };

  const closeModal = () => {
    setIsModalOpen(false)
  };

    return (
      <>
        <ImageGalleryItemStyled key={image.id} onClick={openModal}>
          <ImgStyled src={image.webformatURL} alt={image.tags} loading="lazy" />
        </ImageGalleryItemStyled>
        <ModalWindow
          isModalOpen={isModalOpen}
          closeModal={closeModal}
          image={image}
        />
      </>
    );
}
