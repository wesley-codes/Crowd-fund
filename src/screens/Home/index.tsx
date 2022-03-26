import { useWeb3React } from "@web3-react/core";
import React, { useState } from "react";
import Nava from "../../assets/naka.svg";
import Modal from "../../Components/Modal";
import useWeb3Auth from "../../config/useWeb3Auth";
import { ButtonContainer, Container, DescriptionBox, Image, ImgBox, RequestButton } from "./styles";

const HomeScreen = () => {
  const { active } = useWeb3React();
  const { connect } = useWeb3Auth();

  const [show, setShow] = useState(false);

  const openModalHandler = () => {
    setShow(true);
  };

  const closeModalHandler = () => {
    setShow(false);
  };

  React.useEffect(() => {
    if (active) {
      connect().then(async (contract) => {
        const count = await contract.methods.postCount().call();

        const posts: any[] = [];

        for (let index = 1; index <= (count as number); index++) {
          const post = await contract.methods.posts(index).call();
          posts.push(post);
        }

        console.log("POSTS", posts);
        console.log("POST COUNT", count);
      });
    }
  }, [active]);
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

          {show && <Modal closeModal={closeModalHandler} />}
        </ButtonContainer>
      </div>
      <ImgBox>
        <Image src={Nava} />
      </ImgBox>
    </Container>
  );
};

export default HomeScreen;
