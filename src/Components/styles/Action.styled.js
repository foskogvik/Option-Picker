import styled from "styled-components";

import { colors, fontSize, spacings } from "../../styles/variables";

export const BigButton = styled.button`
  background: ${colors.secondary};
  color: ${colors.white};
  border: none;
  font-weight: bold;
  font-size: ${fontSize.lg};
  margin-bottom: ${spacings.lg};
  padding: 2.4rem;
  width: 100%;
  border-radius: 1rem;
  box-shadow: black 4px 2px 10px;

  :hover {
    cursor: pointer;
    transform: scale(1.01);
    transition: transform 0.25s ease;
  }

  :disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
