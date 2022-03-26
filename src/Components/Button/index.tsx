import React from 'react'
import { ButtonProps } from '../Types'
import { StyledButton } from './style'

const Button = ({radius, padding, bgColor,children} :ButtonProps) => {
  return (
      <StyledButton radius={radius} padding={padding} bgColor={`${bgColor}`}>
          {children}
   </StyledButton>
  )
}

export default Button