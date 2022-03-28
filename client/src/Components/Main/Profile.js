import React from "react";
import styled from "styled-components";
import {useState} from 'react'
import { RiEdit2Line } from "react-icons/ri";



function Profile({ currentUser, ue }) {

  const [edits, setEdits] = useState({
    first_name: '',
    last_name:'',
    email:'',
    avatar:'',
    location:'', });
  
  const [openEdit,  setOpenEdit] = useState(false);


  function handleOpenEdit() {
  setOpenEdit(!openEdit)
  }

  


  return (
  <ProfileDiv class="flex flex-col text-sky-900">
       <div class="flex justify-center mt-2">
      <img
        class=" w-20 h-13 mask mask-hexagon-2 content-center"
        src="https://cdn3.iconfinder.com/data/icons/vector-icons-6/96/256-512.png"
        alt="avatar"
        onClick={handleOpenEdit}
      ></img>
      </div>

    {openEdit === false && 
      <div class="flex flex-col justify-center items-center">
      <WelcomeText>@{currentUser?.username}</WelcomeText>
      {/* <p>User Profile will display current events</p> */}
      <p>Brooklyn, Ny</p>
      <p class='underline'>{ue.length} Events</p>
      <div>
        <RiEdit2Line onClick={handleOpenEdit}></RiEdit2Line>
      </div>
      </div> 
}

{openEdit === true &&
<div class="flex flex-col justify-center items-center">
      <WelcomeText>{currentUser?.username}</WelcomeText>
      <form class="flex flex-col justify-center items-center w-[600px] ">
      <Input placeholder="avatar"></Input>
      <Input placeholder="First Name"></Input>
      <Input placeholder="Last Name"></Input>
      <Input placeholder="Email"></Input>
      <Input placeholder="Location"></Input>
      </form>
      </div>
}

    </ProfileDiv>
  );
}

export default Profile;

const WelcomeText = styled.h2`
  margin: 3rem 0 2rem 0;
  color: #14163c;
  background: bold;
  font-size: 2rem;
`;

const ProfileDiv = styled.div`
display: flex;
  align-items: center;
  margin: 2rem  ;
  justify-content: center;
  flex-direction: column;
height: 400px;
  width: 400px;
  background: rgba(255, 255, 255, 0.20);
  box-shadow: 0 8px 32px 0 rgba(79 138 76 / 37%);
  backdrop-filter: blur(8.5px);
  border-radius: 10px;
  color: #ffffff;
  text-transform: uppercase;
  letter-spacing: 0.4rem;
`
// display: flex;
//   align-items: center;
//   margin: 2rem  ;
//   justify-content: center;
//   flex-direction: column;
//   height: 400px;
//   width: 400px;
//   background: rgba(255, 255, 255, 0.20);
//   box-shadow: 0 8px 32px 0 rgba(31, 38, 400, 0.37);
//   backdrop-filter: blur(8.5px);
//   border-radius: 10px;
//   color: #ffffff;
//   text-transform: uppercase;
//   letter-spacing: 0.4rem;

const Input = styled.input`
  background: rgba(255, 255, 255, 0.70);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  border-radius: 1rem;
  width: 60%;
  height: 3rem;
  padding: 1rem;
  border: none;
  outline: none;
  color: #3c354e;
  font-size: 1rem;
  font-weight: bold;
  margin: 1px;
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