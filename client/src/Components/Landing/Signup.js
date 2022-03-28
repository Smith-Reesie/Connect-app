import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "./Input";
import styled from "styled-components";
import Button from "./Button";

function Signup({ setCurrentUser, handleSignupSwitch }) {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  const history = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formData);
    if (formData.password === formData.password_confirmation) {
      fetch("/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then((res) => res.json())
        .then((userData) => {
          setCurrentUser(userData);
        })
        .then(history("/home"));
    } else {
      alert("Password does not match");
    }
    setFormData({
      username: "",
      email: "",
      password: "",
      password_confirmation: "",
    });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <InputContainer>
          <Input
            type="text"
            name="username"
            placeholder="Enter Username"
            value={formData.username}
            onChange={(e) =>
              setFormData({ ...formData, username: e.target.value })
            }
          />
          <Input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
          <Input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
          />
          <Input
            type="password"
            name="confirm password"
            placeholder="Confirm password"
            value={formData.password_confirmation}
            onChange={(e) =>
              setFormData({
                ...formData,
                password_confirmation: e.target.value,
              })
            }
          />
        </InputContainer>
        <ButtonContainer>
          <Button onClick={handleSubmit} content="Sign Up" />
        </ButtonContainer>
        <HorizontalRule></HorizontalRule>
        <LoginWith onClick={handleSignupSwitch}>
          Already Have an Account?
        </LoginWith>
      </form>
    </div>
  );
}

export default Signup;

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
