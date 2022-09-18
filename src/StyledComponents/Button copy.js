import React from 'react'
import styled from 'styled-components'


const StyledButton = styled.button`
padding: 0.5rem 1rem;
font-size: 1rem;
color: #fff;
border-radius: 7px;
border: none;
background: darkslategray;
cursor: pointer;
animation: FadeIn 2s ease-in;

&:hover{
    box-shadow: 0 3px 6px rgba(0,0,0,0.2);
  }

&.sm{
  font-size: 0.75rem;
}

&.lg{
  padding: 1rem 2rem;
  font-size: 1.5rem;
}

&.secondary{
  background-color: darkorange;
}
&.error{
  background-color: red;
}
  
  
`

const Button = (props) => {
  return (
    <StyledButton {...props}>
        {props.children}
    </StyledButton>
  )
}

export default Button