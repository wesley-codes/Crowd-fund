


import React from 'react'
import { InputProps } from '../Types/Types'
import { InputContainer, StyledInput, Styledlabel } from './Input.styles'

const Input = ({placeholder, type, label, min}: InputProps) => {
    return (
        <InputContainer>
            <Styledlabel>
                {label}
           </Styledlabel>
        <StyledInput placeholder={placeholder} type={type } min={min} />

        
        </InputContainer>
  )
}

export default Input