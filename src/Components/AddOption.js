import { useState } from "react";

import {
  AddOptionStyled,
  AddOptionInput,
  AddOptionButton,
} from "./styles/AddOption.styled";

const AddOption = ({ handleAddOption }) => {
  const [error, setError] = useState(undefined);

  const addOption = (e) => {
    e.preventDefault();
    const option = { text: e.target.elements.option.value.trim() };
    const error = handleAddOption(option);
    setError(error);

    if (!error) {
      e.target.elements.option.value = "";
    }
  };

  return (
    <>
      {error && <p className='add-option-error'>{error}</p>}
      <AddOptionStyled onSubmit={addOption}>
        <AddOptionInput type='text' name='option' id='option' />
        <AddOptionButton>Add Option</AddOptionButton>
      </AddOptionStyled>
    </>
  );
};

export default AddOption;
