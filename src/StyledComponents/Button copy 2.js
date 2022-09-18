import React from 'react'
import styled,{css} from 'styled-components'


const StyledButton = styled.button`
padding: 0.5rem 1rem;
font-size: 1rem;
color: #fff;
border-radius: 7px;
border: none;
background: darkslategray;
cursor: pointer;


&:hover{
    box-shadow: 0 3px 6px rgba(0,0,0,0.2);
  }

${({dataType})=> css`
    ${()=> (dataType === 'secondary') && `background-color: darkorange;`}
    ${()=> (dataType === 'error') && `background-color: red;`}
  `
}

${({dataSize})=> css`
    ${()=> dataSize === 'sm' && `
    font-size: 0.75rem;
    `}
    ${()=> dataSize === 'lg' && `
    padding: 1rem 2rem;
    font-size: 1.5rem;
    `}
  `
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