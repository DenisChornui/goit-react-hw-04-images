import { ErrorMessage, Formik } from 'formik';
import { FcSearch } from 'react-icons/fc';
import {
  SearchBarStyled,
  FormStyled,
  ButtonStyled,
  ButtonLabelStyled,
  InputStyled,
} from './Searchbar.styled';

export const SearchBar = ({ onSubmit }) => {
  return (
    <SearchBarStyled>
      <Formik
        initialValues={{ value: '' }}
        onSubmit={(values, actions) => {
          onSubmit(values.value);
          actions.resetForm();
        }}
      >
        <FormStyled>
          <ButtonStyled type="submit">
            <ButtonLabelStyled>Search</ButtonLabelStyled>
            <FcSearch />
          </ButtonStyled>

          <InputStyled
            type="text"
            name="value"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
          <ErrorMessage name="value" component="div" />
        </FormStyled>
      </Formik>
    </SearchBarStyled>
  );
};
