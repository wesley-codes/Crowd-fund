import styled from "styled-components"
import { StyledButton } from "../Button/Button.styles"
import Input from "../Input/Input"




export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom:0;
  right: 0;
  width:100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display:flex;
  justify-content : center;
  align-items: center;






`


export const ModalTitleContainer = styled.div`
width: 80%;
margin-bottom:15px;
display: flex;
justify-content: space-between;
align-items: center;
`




export const ModalContainer = styled.div`
width: 35%;
border: 2px solid #fff;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
border-radius: 5px;
padding: 35px 0;


& h3{
    color:#fff;
    text-align: center;
}

@media(max-width:1024px){
    width: 80%
}

`



export const FileInput = styled(Input)`

color: #fff;
margin-top:15px;
`




export const ModalsubmitButton = styled(StyledButton)`
width:80%;
font-weight:700;

`