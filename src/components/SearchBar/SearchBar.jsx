// import s from './SearchBar.module.css';
import { Formik, Form, Field } from 'formik';

const SearchBar = () => {
  return (
    <Formik>
      <Form>
        <Field
          type='text'
          //   autocomplete='off'
          //   autofocus
          placeholder='Search images and photos'
        />
        <button type='submit'>Search</button>
      </Form>
    </Formik>
  );
};

export default SearchBar;
