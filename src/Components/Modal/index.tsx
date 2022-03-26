import React from "react";
import Input from "../Input";
import { TextArea } from "../TextArea";
import {
  FileInput,
  ModalContainer,
  ModalOverlay,
  ModalsubmitButton,
  ModalTitleContainer,
} from "./style";
import CloseSVG from "../SVGs/CloseSVG"
import { ModalProps } from "../Types";
const Modal = ({closeModal}:ModalProps) => {
  

  return (
    <ModalOverlay >
      <ModalContainer>
        <ModalTitleContainer>
          <h3>Request Form</h3>
          <CloseSVG  onClick={closeModal}/>
       </ModalTitleContainer>

        <Input placeholder="Enter Your Name" type="text" label="Your Name" />
        <Input
          placeholder="Enter tilte of request"
          type="text"
          label="Request Title"
        />
        <Input
          placeholder="Enter Your Amount"
          type="number"
          label="Your Amount"
          min={1}
        />
        <TextArea />

        <FileInput
          placeholder="choose File"
          type="file"
          label="Upload Fund File"
        />

        <ModalsubmitButton radius={5} padding={8} type="submit">
          SUBMIT
        </ModalsubmitButton>
      </ModalContainer>
    </ModalOverlay>
  );
};








export default Modal;