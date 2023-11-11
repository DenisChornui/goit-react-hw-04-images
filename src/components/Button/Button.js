import { ButtonLoadMoreStyled } from './Button.styled';

export const Button = ({ onClick }) => {
  return (
    <ButtonLoadMoreStyled type="button" onClick={onClick}>
      Load More
    </ButtonLoadMoreStyled>
  );
};
