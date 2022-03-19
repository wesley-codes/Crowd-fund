import React,{useState} from "react";
import styled from "styled-components";
import Nava from "../../Assets/naka.svg";
import { StyledButton } from "../Button/Button.styles";
import Modal from "../Modal/Modal";

const Container = styled.div`
  margin: 0 8%;
  display: flex;
  background-color: inherit;
  align-items: center;
  border-radius: 10px;
  & h2 {
    color: #fff;
    font-size: 2rem;
    text-align: start;
    letter-spacing: 0.03em;
  }

  @media (max-width: 1024px) {
    flex-direction: column-reverse;
    margin: 10%;

    & h2 {
      font-size: 2rem;
      text-align: center;
      font-weight: 600;
    }
  }
`;

const ImgBox = styled.div``;

const Image = styled.img`
  width: 100%;
`;

const DescriptionBox = styled.div`
  margin: 0 0 0 10px;

  & p {
    color: white;
    margin-top: 15px;
    background-color: transparent;

    font-size: 20px;
  }

  @media (max-width: 1024px) {
    margin: 10% 0 0 10px;

    & p {
      margin-top: 10%;
      text-align: center;
      font-size: 18px;
    }
  }
`;

const RequestButton = styled(StyledButton)`
  margin: 25px 0 0 10px;
  color: #fff;
  border: 1px solid #fff;
`;

const ButtonContainer = styled.div`
  @media (max-width: 1024px) {
    width: 100%;
    display: flex;
    justify-content: center;
  }
`;

const HomeScreen = () => {

const [show , setShow] = useState(false)

  const openModalHandler = () => {
    setShow(true)

  }

  const closeModalHandler = () => {
    setShow(false)
  }

  return (
    <Container>
      <div>
        <DescriptionBox>
          <h2>Democratizing fundraising for the blockchain space</h2>
          <p>Connect to wallet and create request</p>
        </DescriptionBox>
        <ButtonContainer>
          <RequestButton radius={5} padding={10} onClick={openModalHandler}>
            Create Request
          </RequestButton>

         {show &&  <Modal closeModal={closeModalHandler} />}
        </ButtonContainer>
      </div>
      <ImgBox>
        <Image src={Nava} />
      </ImgBox>
    </Container>
  );
};

export default HomeScreen;
