import { BigButton } from './styles/Action.styled';

const Action = ({ handlePick, hasOptions }) => {
  return (
    <>
      <BigButton onClick={handlePick} disabled={!hasOptions}>
        What should i do?
      </BigButton>
    </>
  );
};

export default Action;
