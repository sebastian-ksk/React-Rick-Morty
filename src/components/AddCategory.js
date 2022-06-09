import React, { useState } from 'react';
import PropTypes from 'prop-types';
const AddCategory = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState('');
  const changeText = (e) => {
    setInputValue(e.target.value)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim().length > 2) {
      setCategories(categories => [inputValue, ...categories]);
      setInputValue('');
    }

  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="AddCategory"
        value={inputValue}
        onChange={changeText}
        id="add" />
    </form>
  )
};

AddCategory.propTypes = {

  setCategories: PropTypes.func.isRequired,
}
export default AddCategory