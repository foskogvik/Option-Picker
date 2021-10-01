import styled from "styled-components";

import { colors, fontSize, spacings } from "../../styles/variables";

export const OptionStyled = styled.div`
  border-bottom: 1px solid ${colors.white};
  display: flex;
  justify-content: space-between;
  padding: ${spacings.lg} ${spacings.md};
`;

export const OptionButton = styled.button`
  font-size: ${fontSize.md};
  font-weight: 500;
  background: none;
  border: none;
  color: ${colors.white};
  padding: 0;

  :hover {
    cursor: pointer;
    transform: scale(1.01);
    transition: transform 0.25s ease;
  }
`;
