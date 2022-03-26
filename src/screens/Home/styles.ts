import styled from "styled-components";
import { StyledButton } from "../../Components/Button/style";

export const Container = styled.div`
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

export const ImgBox = styled.div``;

export const Image = styled.img`
  width: 100%;
`;

export const DescriptionBox = styled.div`
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

export const RequestButton = styled(StyledButton)`
  margin: 25px 0 0 10px;
  color: #fff;
  border: 1px solid #fff;
`;

export const ButtonContainer = styled.div`
  @media (max-width: 1024px) {
    width: 100%;
    display: flex;
    justify-content: center;
  }
`;
