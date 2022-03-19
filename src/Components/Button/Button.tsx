import React from 'react'
import { ButtonProps } from '../Types/Types'
import { StyledButton } from './Button.styles'

const Button = ({radius, padding, bgColor,children} :ButtonProps) => {
  return (
      <StyledButton radius={radius} padding={padding} bgColor={`${bgColor}`}>
          {children}
   </StyledButton>
  )
}

export default Button