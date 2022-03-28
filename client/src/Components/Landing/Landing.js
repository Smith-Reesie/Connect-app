import React from "react";
import Login from "./Login";
import Signup from "./Signup";
import { useState } from "react";
import styled from "styled-components";

function Landing({ onLogin, setCurrentUser }) {
  const [signUp, setSignUp] = useState(true);

  function handleSignupSwitch() {
    setSignUp(!signUp);
  }
  return (
    <MainContainer>
      <WelcomeText>Welcome</WelcomeText>
      {!signUp ? (
        <Signup
          setCurrentUser={setCurrentUser}
          handleSignupSwitch={handleSignupSwitch}
        />
      ) : (
        <Login
          onLogin={onLogin}
          setCurrentUser={setCurrentUser}
          handleSignupSwitch={handleSignupSwitch}
        />
      )}
    </MainContainer>
  );
}

export default Landing;

const MainContainer = styled.div`
  display: flex;
  align-items: center;
  /* justify-content: center; */
  flex-direction: column;
  height: 80vh;
  width: 30vw;
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(8.5px);
  border-radius: 10px;
  color: #ffffff;
  text-transform: uppercase;
  letter-spacing: 0.4rem;
  @media only screen and (max-width: 320px) {
    width: 80vw;
    height: 90vh;
    hr {
      margin-bottom: 0.3rem;
    }
    h4 {
      font-size: small;
    }
  }
  @media only screen and (min-width: 360px) {
    width: 80vw;
    height: 90vh;
    h4 {
      font-size: small;
    }
  }
  @media only screen and (min-width: 411px) {
    width: 80vw;
    height: 90vh;
  }
  @media only screen and (min-width: 768px) {
    width: 80vw;
    height: 80vh;
  }
  @media only screen and (min-width: 1024px) {
    width: 70vw;
    height: 50vh;
  }
  @media only screen and (min-width: 1280px) {
    width: 30vw;
    height: 80vh;
  }
`;

const WelcomeText = styled.h2`
  margin: 3rem 0 2rem 0;
  color: #14163c;
  background: bold;
  font-size: 2rem;
`;
