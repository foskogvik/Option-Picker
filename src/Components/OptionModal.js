import React from "react";
import Modal from "styled-react-modal";

import {
  StyledModal,
  StyledModalTitle,
  StyledModalBody,
} from "./styles/OptionModal.styled";

import { AddOptionButton } from "./styles/AddOption.styled";

const OptionModal = ({ handleClearSelectedOption, selectedOption }) => (
  <StyledModal
    isOpen={!!selectedOption}
    onBackgroundClick={handleClearSelectedOption}
    onEscapeKeydown={handleClearSelectedOption}
    contentLabel='Selected Option'
    closeTimeoutMS={200}
  >
    <StyledModalTitle>Selected Option</StyledModalTitle>
    {selectedOption && <StyledModalBody>{selectedOption.text}</StyledModalBody>}
    <AddOptionButton onClick={handleClearSelectedOption}>Okay</AddOptionButton>
  </StyledModal>
);
export default OptionModal;
