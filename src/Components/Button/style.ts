import styled from "styled-components";
import { ButtonProps } from "../Types";

export const StyledButton = styled.button<ButtonProps>`
  border-radius: ${({ radius }) => radius}px;
  padding: ${({ padding }) => padding}px;
  background-color: ${({ bgColor }) => bgColor};
  color: #fff;
  border: 1px solid #fff;
  cursor: pointer;
  min-width: 180px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
