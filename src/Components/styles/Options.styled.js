import styled from "styled-components";

import { colors, fontSize, spacings } from "../../styles/variables";

export const OptionsHeader = styled.div`
  background: ${colors.tertiaryDark};
  color: ${colors.white};
  display: flex;
  justify-content: space-between;
  padding: ${spacings.md};
`;

export const OptionsHeaderTitle = styled.h3`
  margin: 0;
`;

export const OptionsButton = styled.button`
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

export const OptionsMessage = styled.p`
  margin: 0;
  text-align: center;
  padding: ${spacings.lg};
`;
