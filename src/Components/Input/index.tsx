import React from "react";
import { InputProps } from "../Types";
import { InputContainer, StyledInput, Styledlabel } from "./style";

const Input = ({ placeholder, type, label, min }: InputProps) => {
  return (
    <InputContainer>
      <Styledlabel>{label}</Styledlabel>
      <StyledInput placeholder={placeholder} type={type} min={min} />
    </InputContainer>
  );
};

export default Input;
