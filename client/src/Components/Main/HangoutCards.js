import React from 'react';
import {useState, useEffect} from 'react'
import { RiCheckboxMultipleBlankFill } from 'react-icons/ri';
import { TiDeleteOutline } from "react-icons/ti";
import { FiSend} from "react-icons/fi";
import Friends from './Friends';
import styled from 'styled-components';

function HangoutCards({currentUser, ue, friends, cancelUserEvents}) {

  const [invitesSent, setInvitesSent] = useState([]);
  const[userIds, setUserIds] = useState([])
  const [openInvite, setOpenInvite] = useState(false)
    const [formState, setFormState] = useState({event_id: '',
user_id: ''})
const {date, time, location } = ue


    function handleAddFriendToEvent(e){
      e.preventDefault()
      fetch("/hangout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({user_id: userIds,
        event_id: ue.id }),
      })
      .then((res) => res.json());
    }

    function handleIdChange(e){
      const option = Array.from(e.target.options )
      console.log(option)
      const selectedOptions = option.filter((o) => o.selected)
      const idArry = selectedOptions.map((so) => so.value)
      setUserIds(idArry)
      // setUserIds([...userIds, e.target.value])
    }

    // function cancelEvent(event){
    //   fetch(`/cancel/${event.id,:
    //   method: 'DELETE')
    // }



    
  return (

  <div class="flex flex-col font-['Open_Sans'] text-[12px] text-[#F19900">
    
      <div class="flex flex-col justify-center items-center m-1 border- mask mask-hexagon-2  -skew-y-0 -skew-x-0 hover:bg-[#e97633] h-36 w-36  bg-[#188818] ">
          <div class="flex flex-row justify-center items-center m-1 w-10 h-10 mask mask-hexagon">
            <img class=" flex-grow w-16 h-10 "src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJIRG3JLIs6_cwFahgJWUNM_Mrg1b83nTBOw&usqp=CAU" alt="event"/>
          </div>
          <p>{date} {time}</p>
          <p>{location}</p>
          <button onClick={()=> setOpenInvite(!openInvite)} class="button hover:bg-green-700  hover:h-[30px]">Invite</button>
          <div class='flex justify-end'>
           <p>{userIds.length}</p>
           <TiDeleteOutline class="hover:w-[20px] hover:h-[20px] hover:bg-red-600" onClick={()=> cancelUserEvents(ue)}></TiDeleteOutline>
          </div>
      </div>
      {openInvite?
      <form onSubmit={handleAddFriendToEvent}>
          <Select multiple onChange={(e) => handleIdChange(e)}>
            {friends.map((f) =>  <option value={f.id}>{f.username}</option>
            )}
          </Select> 
          <button class="button h-[12] w-[12]">Send Invite</button>
          
      </form>
          :
            null
          }
  </div>

  )
}

export default HangoutCards;

const Form = styled.form`
width: 7rem;
height: 5rem;
border: 4px solid red;
`

const Select = styled.select`
width: 8rem;
height: 6rem;
border: 4px solid orange;
border-radius: 10px;
background: whitesmoke;
color: blue;
`

