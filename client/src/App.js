import Landing from "./Components/Landing/Landing";
import Home from "./Components/Main/Home";
import { useEffect, useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { React, Fragment } from "react";
import { Router } from "react-router-dom";
import Search from "./Components/Main/Search";
import styled from "styled-components";


function App() {
  const [currentUser, setCurrentUser] = useState("");

  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setCurrentUser(user));
      }
    });
  }, []);
  console.log(currentUser);

  function handleLogin(user) {
    setCurrentUser(user);
  }

  function handleLogOut() {
    fetch("/logout", {
      method: "DELETE",
    });
    setCurrentUser(null);
  }

  return (
    <div class="flex content-center justify-center bg-[url('/Img/pngwing.com.png)] bg-white/10">
      {/* <WelcomeText>Welcome</WelcomeText> */}
      <BrowserRouter>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Landing
                onLogin={handleLogin}
                setCurrentUser={setCurrentUser}
                currentUser={currentUser}
              />
            }
          />
          <Route
            path="/home"
            element={<Home currentUser={currentUser} onLogout={handleLogOut} />}
          />
          <Route path="/search" element={<Search />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

// const MainContainer = styled.div`
//   display: flex;
//   align-items: center;
//   flex-direction: column;
//   height: 80vh;
//   width: 30vw;
//   background: rgba(255, 255, 255, 0.15);
//   box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
//   backdrop-filter: blur(8.5px);
//   border-radius: 10px;
//   color: #ffffff;
//   text-transform: uppercase;
//   letter-spacing: 0.4rem;
//   @media only screen and (max-width: 320px) {
//     width: 80vw;
//     height: 90vh;
//     hr {
//       margin-bottom: 0.3rem;
//     }
//     h4 {
//       font-size: small;
//     }
//   }
//   @media only screen and (min-width: 360px) {
//     width: 80vw;
//     height: 90vh;
//     h4 {
//       font-size: small;
//     }
//   }
//   @media only screen and (min-width: 411px) {
//     width: 80vw;
//     height: 90vh;
//   }
//   @media only screen and (min-width: 768px) {
//     width: 80vw;
//     height: 80vh;
//   }
//   @media only screen and (min-width: 1024px) {
//     width: 70vw;
//     height: 50vh;
//   }
//   @media only screen and (min-width: 1280px) {
//     width: 30vw;
//     height: 80vh;
//   }
// `;

// const WelcomeText = styled.h2`
//   margin: 3rem 0 2rem 0;
//   color: #14163c;
//   background: bold;
//   font-size: 2rem;
// `;
