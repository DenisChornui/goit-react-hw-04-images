import { Component } from 'react';
import { ModalWindow } from 'components/Modal/Modal';
import { ImageGalleryItemStyled, ImgStyled } from './ImageGalleryItem.styled';

export class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
  };

  openModal = () => {
    this.setState({ isModalOpen: true });
  };

  closeModal = () => {
    this.setState({ isModalOpen: false });
  };

  render() {
    const { isModalOpen } = this.state;
    const { image } = this.props;

    return (
      <>
        <ImageGalleryItemStyled key={image.id} onClick={this.openModal}>
          <ImgStyled src={image.webformatURL} alt={image.tags} loading="lazy" />
        </ImageGalleryItemStyled>
        <ModalWindow
          isModalOpen={isModalOpen}
          closeModal={this.closeModal}
          image={image}
        />
      </>
    );
  }
}
