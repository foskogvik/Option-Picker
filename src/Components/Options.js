import Option from "./Option";

import {
  OptionsHeader,
  OptionsHeaderTitle,
  OptionsButton,
  OptionsMessage,
} from "./styles/Options.styled";

const Options = ({ options, clearOptions, deleteOption }) => {
  return (
    <>
      <OptionsHeader>
        <OptionsHeaderTitle className='widget-header__title'>
          Your Options
        </OptionsHeaderTitle>
        <OptionsButton onClick={clearOptions}>Remove all</OptionsButton>
      </OptionsHeader>
      {options.length === 0 && (
        <OptionsMessage className='widget__message'>
          Please add an option to get started!
        </OptionsMessage>
      )}
      {options.map((option) => (
        <Option
          key={option.id}
          optionText={option.text}
          id={option.id}
          deleteOption={deleteOption}
        ></Option>
      ))}
    </>
  );
};

export default Options;
