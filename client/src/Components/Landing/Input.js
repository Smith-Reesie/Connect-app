import React from "react";
import styled from "styled-components";

function Input({ type, placeholder, onChange }) {
  return (
    <StyledInput type={type} placeholder={placeholder} onChange={onChange} />
  );
}

export default Input;

const StyledInput = styled.input`
  background: rgba(255, 255, 255, 0.70);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  border-radius: 1rem;
  width: 100%;
  height: 3rem;
  padding: 1rem;
  border: none;
  outline: none;
  color: #3c354e;
  font-size: 1rem;
  font-weight: bold;
  margin: 10px;
  &:focus {
    display: inline-block;
    box-shadow: 0 0 0 0.2rem #b9abe0;
    backdrop-filter: blur(12rem);
    border-radius: 2rem;
  }
  &::placeholder {
    color: black;
    font-weight: 100;
    font-size: 1rem;
  }
`;
