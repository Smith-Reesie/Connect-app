import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "./Button";
import Input from "./Input";
import styled from "styled-components";

function Login({ onLogin, handleSignupSwitch }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const history = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    console.log(username, password);
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }).then((r) => {
      if (r.ok) {
        r.json()
          .then((user) => onLogin(user))
          .then(history("/home"));
      } else {
        alert("No user found, Please Sign Up");
      }
    });
  }

  return (
    <div>
      <div>
        <form class="form-control" onSubmit={handleSubmit}>
          <InputContainer>
            <Input
              type="text"
              name="username"
              value={username}
              placeholder="Enter your username"
              onChange={(e) => setUsername(e.target.value)}
            />
          </InputContainer>
          <InputContainer>
            <Input
              type="password"
              name="password"
              value={password}
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </InputContainer>
          <ButtonContainer>
            <Button onClick={handleSubmit} content="Log In" />
            {/* <Link to="/home">
            <button type="submit" >
              Log In
            </button>
          </Link> */}
          </ButtonContainer>
          <HorizontalRule></HorizontalRule>
          <LoginWith onClick={handleSignupSwitch}>
            Dont have an account?
          </LoginWith>
        </form>
      </div>
    </div>
  );
}

export default Login;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 20%;
  width: 100%;
`;

const ButtonContainer = styled.div`
  margin: 1rem 0 2rem 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LoginWith = styled.h5`
  cursor: pointer;
  color: #14163c;
`;

const HorizontalRule = styled.hr`
  width: 100%;
  height: 0.3rem;
  border-radius: 0.8rem;
  border: none;
  background: linear-gradient(to right, #14163c 0%, #03217b 79%);
  background-color: #ebd0d0;
  margin: 1.5rem 0 1rem 0;
  backdrop-filter: blur(25px);
`;
