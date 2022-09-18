import React from 'react'

import styled from 'styled-components'

const StyledAlink = styled.a.attrs((props)=>{
    return {
        target : "_BLANK"
    }
})`
display: inline-block;
font-size: 1.2rem;
text-decoration: none;
color: darkorange;
`

const Alink = (props) => {
  return (
    <StyledAlink {...props}>
        {props.children}
    </StyledAlink>
  )
}

export default Alink