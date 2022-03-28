import React from "react";
import Input from "../Landing/Input";
import styled from "styled-components";
import Button from "../Landing/Button";
import { useState, useEffect } from "react";

function EventsForm({currentUser, submitEvent}) {
  const [time, setTime] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState("");
  const [date, setDate] = useState("")
  

  function handleEventSubmit(e){
    e.preventDefault()
    fetch('/newEvent', {
     method: 'POST' ,
     headers: {
       "Content-Type": "application/json",
     },
     body: JSON.stringify({ location, time, price, date }),
   }).then((r) => r.json())
   .then((newEvent) => submitEvent(newEvent))
     
  }




  return (
    <MainContainer >
      <div class=" flex felx-col justify-center items-center text-zinc-800 text-[30px] mt-1 ">
        Create New Event
      </div>
    <div  class="flex felx-col justify-center items-center">
      <form onSubmit={handleEventSubmit} class="form-control">
        <InputContainer>
          <Input
            type="text"
            name="username"
            value={location}
            placeholder="Set Location"
            onChange={(e) => setLocation(e.target.value)}
          />
        </InputContainer>
        <InputContainer>
          <Input
            type="date"
            value={date}
            placeholder="Set Date"
            onChange={(e) => setDate(e.target.value)}
          />
        </InputContainer>
        <InputContainer>
          <Input
            type="time"
            value={time}
            placeholder="Set Time"
            onChange={(e) => setTime(e.target.value)}
          />
        </InputContainer>
        <InputContainer>
         <Select id="Price" name="Price Range" value={price} onChange={(e) => setPrice(e.target.value)}>
            <option value="$">$</option>
            <option value="$$">$$</option>
            <option value="$$$">$$$</option>
          </Select>
          {/* <Input
            type="text"
            placeholder="Set Time"
            onChange={(e) => setTime(e.target.value)}
          /> */}
        </InputContainer>
          <ButtonContainer>
        <Button  content="Create" />
       </ButtonContainer>
      </form>
    </div>
    </MainContainer>
  );
}

export default EventsForm;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 20%;
  width: 300px;
`;

const Select = styled.select`
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  border-radius: 2rem;
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
    box-shadow: 0 0 0 0.2rem #;
    backdrop-filter: blur(12rem);
    border-radius: 2rem;
  }
  &::placeholder {
    color: black;
    font-weight: 100;
    font-size: 1rem;
  }
`;

const ButtonContainer = styled.div`
  margin: 1rem 0 2rem 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MainContainer = styled.div`
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
  /* @media only screen and (max-width: 320px) {
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
  } */
`;