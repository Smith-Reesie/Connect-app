import React from "react";
import styled from "styled-components";

function Button({ content }) {
  return <StyledButton>{content}</StyledButton>;
}

export default Button;

const StyledButton = styled.button`
  background: linear-gradient(to right, rgba(199,92,29,1) 27%, rgba(23,15,2,1) 77%) ;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  width: 65%;
  height: 3rem;
  border: none;
  color: white;
  border-radius: 2rem;
  cursor: pointer;

  button:hover {
    color: green;
  }
`;


