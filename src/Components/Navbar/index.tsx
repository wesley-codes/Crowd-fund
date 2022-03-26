import { useWeb3React } from "@web3-react/core";
import React from "react";
import useWeb3Auth from "../../config/useWeb3Auth";
import AngelSVG from "../SVGs/AngelSVG";
import { ConnectButton, NavContainer, NavContainerLogo } from "./style";

const Navbar = () => {
  const { login, logout } = useWeb3Auth();
  const { active, account } = useWeb3React();

  return (
    <div>
      <NavContainer>
        <NavContainerLogo>
          <h2>Crypto</h2>
          <AngelSVG width={50} height={50} />
        </NavContainerLogo>

        <ConnectButton onClick={active ? logout : login} radius={5} padding={10}>
          {active ? account?.substring(0, 4) + "..." + account?.substring(account.length - 3) : "CONNECT WALLET"}
        </ConnectButton>
      </NavContainer>
    </div>
  );
};

export default Navbar;
