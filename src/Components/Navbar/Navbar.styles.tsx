import styled from "styled-components"
import { StyledButton } from "../Button/Button.styles"


export const NavContainer = styled.nav`

margin: 0 8%;
padding:15px 0 ;
display:flex;
justify-content: space-between



`


export const NavContainerLogo = styled.div`
display: flex;
align-items: center;
   & h2{
       color: #fff;
   }

   @media(max-width:1024px){
    h2{
        font-size: 1rem
    }
}

`



export const ConnectButton = styled(StyledButton)`
color:#FFF;
border: 1px solid white;

`

