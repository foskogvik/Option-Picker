import styled from "styled-components";

import { colors, fontSize, spacings } from "../../styles/variables";

export const AddOptionStyled = styled.form`
  display: flex;
  flex-direction: column;
  padding: ${spacings.md};

  @media (min-width: 45rem) {
    flex-direction: row;
  }
`;

export const AddOptionInput = styled.input`
  background: ${colors.white};
  border: none;
  border-bottom: 0.3rem solid ${colors.secondary};
  color: ${colors.black};
  flex-grow: 1;
  margin: 0 0 ${spacings.sm} 0;
  padding: ${spacings.md};
  font-size: ${fontSize.md};

  :focus {
    outline: none;
  }

  @media (min-width: 45rem) {
    margin: 0 ${spacings.sm} 0 0;
  }
`;

export const AddOptionButton = styled.button`
  background: ${colors.secondary};
  border: none;
  border-bottom: 0.3rem solid ${colors.white};
  color: white;
  font-size: ${fontSize.md};
  font-weight: 500;
  padding: ${spacings.md};

  :hover {
    cursor: pointer;
    transform: scale(1.01);
    transition: transform 0.25s ease;
  }
`;
