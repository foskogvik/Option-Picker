import { OptionStyled, OptionButton } from "./styles/Option.styled";
import { OptionsMessage } from "./styles/Options.styled";

const Option = ({ id, optionText, deleteOption }) => {
  return (
    <OptionStyled>
      <OptionsMessage>
        {id}. {optionText}
      </OptionsMessage>
      <OptionButton
        className='button button--link'
        onClick={() => deleteOption(id)}
      >
        remove
      </OptionButton>
    </OptionStyled>
  );
};

export default Option;
