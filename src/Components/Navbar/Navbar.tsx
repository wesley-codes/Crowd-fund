

import React from 'react'
import AngelSVG from '../SVGs/AngelSVG'
import { ConnectButton, NavContainer, NavContainerLogo } from './Navbar.styles'

const Navbar = () => {
  return (
      <div>
              <NavContainer>
          
          <NavContainerLogo>
              <h2>
                  Crypto
              </h2>
              <AngelSVG width={50} height={50}/>

            </NavContainerLogo>

          <ConnectButton radius={5} padding={10} >
              CONNECT WALLET
</ConnectButton>

    </NavContainer>
  </div>
  )
}

export default Navbar