import styled from "styled-components";
import Modal from "styled-react-modal";

import { colors, fontSize, spacings } from "../../styles/variables";

export const StyledModal = Modal.styled`
  width: 30rem;
  height: 30rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${colors.primaryDark};
  transition: opacity 200ms ease-in-out;
`;

export const StyledModalTitle = styled.h3`
  margin: ${spacings.lg};
`;

export const StyledModalBody = styled.p`
  font-size: 2rem;
  font-weight: 300;
  margin: 0 0 ${spacings.lg} 0;
  word-break: break-all;
`;
