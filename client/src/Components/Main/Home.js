import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import EventsForm from "./EventsForm";
import Friends from "./Friends";
import HangoutCards from "./HangoutCards";
import NavBar from "./NavBar";
import Profile from "./Profile";
import HangoutCard from "../Hangout card /HangoutCard";

function Home({ onLogout, currentUser }) {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [friends, setFriends] = useState([]);
  const [friendRequest, setFriendRequest] = useState([]);
  const [sentRequest, setSentRequest] = useState([]);
  const [recievedReq, setRecievedReq] = useState([]);
  const [userEvents, setUserEvents] = useState([])



// Get all Users

  useEffect(() => {
    fetch("/users")
      .then((res) => res.json())
      .then((data) => setUsers(data.filter((ud) => ud.id !== currentUser.id)));
  }, []);



  function submitEvent(newEvent){
    setUserEvents([...userEvents, newEvent])
  }

  let searchedUsers = users.filter((user) =>
    user.username.toLowerCase().includes(search.toLowerCase())
  );

  console.log(users)

// Get User Events 

  useEffect(() => {
    if(currentUser?.id){
    fetch(`/userEvents/${currentUser.id}`)
      .then((res) => res.json())
      .then((data) => setUserEvents(data))
    }
      ;
  }, [currentUser]);

// Delete User Events

function cancelUserEvents(event) {
  fetch(`/cancelEvent/${event.id}`, {
    method: "DELETE",
  }).then((CE) =>
    setUserEvents((userEvents) => userEvents.filter((ue) => ue.id !== event.id))
  );
}



  // get users friends
  useEffect(() => {
    currentUser &&
      fetch(`/friends/${currentUser.id}`)
        .then((res) => res.json())
        .then((fData) =>
          setFriends(
            fData
              .map((friendship) => [friendship.friend_a, friendship.friend_b])
              .flat()
              .filter((user) => user.id !== currentUser.id)

            // ).filter((user) => user.id !== currentUser.id)
          )
        );
  }, [currentUser]);


  useEffect(() => {
    currentUser &&
      fetch(`/request/${currentUser.id}`)
        .then((res) => res.json())
        .then((request) => setFriendRequest(request));
    // .then((request) => console.log(request));
  }, [currentUser]);



  // Recieved Friend Request

  useEffect(() => {
    const filterdRequest = friendRequest.filter(
      (f) => f.reciever.id === currentUser.id && f.status === "pending"
    );
    setRecievedReq(filterdRequest);
  }, [friendRequest]);

  // Sent Friend Request
  useEffect(() => {
    const filterdSentRequest = friendRequest.filter(
      (f) => f.requestor.id === currentUser.id && f.status === "pending"
    );
    setSentRequest(filterdSentRequest);
  }, [friendRequest]);

  //add Friend Button Function

  function postFriendRequest(target) {
    const u1 = currentUser;
    const u2 = target;
    fetch("/request", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        requestor_id: u1.id,
        reciever_id: u2,
        status: "pending",
      }),
    })
    .then(setUsers(users.filter((u) => u.id !== u2.id)))
  }

  // accepting Friend Request

  function handleAcceptBtn(recieved) {
    fetch(`/accept/${recieved.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/josn",
      },
      body: JSON.stringify({
        id: recieved.id,
        status: "accepted",
        requestor_id: recieved.requestor.id,
        reciever_id: currentUser.id,
      }),
    });
  }


  // function handleEditBtn(user) {
  //   fetch(`/accept/${currentUser.id}`, {
  //     method: "PATCH",
  //     headers: {
  //       "Content-Type": "application/json",
  //       Accept: "application/josn",
  //     },
  //     body: JSON.stringify({
  //       id: currentUser.id,
  //       first_name: "",
  //       last_namne: "",
  //       avatar: "",
  //       email:  ""
  //     }),
  //   });
  // }

  // //decline Freiend Request

  function handleDeclineBtn(recieved) {
    fetch(`/cancel/${recieved.id}`, {
      method: "DELETE",
    }).then((declinedReq) =>
      setSentRequest((recievedReq) => recievedReq.filter((rr) => rr.id !== declinedReq.id))
    );
  }

  //Cancel sent request

  function handleCancelReqBtn(request) {
    fetch(`/cancel/${request.id}`, {
      method: "DELETE",
    })
      .then((canceledReq) =>
        setSentRequest((sentRequest) => sentRequest.filter((sr) => sr.id !== request.id))
      );
  }

  // Remove Friend btn

  function removeFriendBtn(friend) {
    fetch(`/remove/${currentUser.id}/${friend.id}`, {
      method: "DELETE",
    }).then((rmvFriend) =>
      setFriends((friends) => friends.filter((f) => f.id !== friend.id))
    );
  }

  return (
    <Main>
      <div className="fixed top-0 left-0 h-screen m-0 rounded-r-lg shadow-2xl flex flex-col bg-[#0a1322] text-red-500">
        <NavBar onLogout={onLogout} />
      </div>
      <div class="col-start-2 h-screen border-0 border-green-400 grid grid-rows-5 grid-cols-6  ">
        <div class="w-96 ml-6 mt-6 col-start-1 col-end-4 row-span-3 border-0  border-orange-500 drop-shadow-[0 8px 32px 0 rgba(0, 0, 0, 0)] ">
          <Profile currentUser={currentUser}  ue={userEvents} />
        </div>
        <div class="col-start-4 col-end-7 row-span-3 ml-3 mt-5 border-0 border-orange-700 drop-shadow-2xl">
          <EventsForm submitEvent={submitEvent} currentUser={currentUser} />
        </div>

        <div class="col-start-2 col-end-6 row-span-2 border-0 flex flex-row flex-wrap justify-items-start mb-6 overflow-auto will-change-scroll no-scrollbar backdrop-blur-[3px] drop-shadow-[rgba(31, 38, 13, 0.37)]">

        <div class='flex items-center content-center'>New Events Here</div>
          {
            userEvents?.map((ue) =>    
            <HangoutCards 
            key={ue.id}
            ue={ue}
            friends={friends}
            currentUser={currentUser}
            cancelUserEvents={cancelUserEvents}/>
            )
          }
        </div>

        <div>
          <HangoutCard/>
        </div>


      </div>

      <div class="h-screen border-l-2 border-amber-50 backdrop-blur-[3px] bg-[255, 255, 255, 0.15] drop-shadow-[0 8px 32px 0 rgba(31, 38, 135, 0.37)]  text-blue-500  grid grid-rows-8 ">
        <Friends
          currentUser={currentUser}
          users={searchedUsers}
          addFriendBtn={postFriendRequest}
          acceptBtn={handleAcceptBtn}
          friends={friends}
          recievedReq={recievedReq}
          sentRequest={sentRequest}
          cancelReqBtn={handleCancelReqBtn}
          declineBtn={handleDeclineBtn}
          removeFriend={removeFriendBtn}
          setSearch={setSearch}
          search={search}
        />
      </div>
    </Main>
  );
}
export default Home;

const Main = styled.div`
width: 100vw;
  display: grid;
  grid-template-columns: 99px 6fr 2fr ;
  grid-template-rows: 100%;
  
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: rows;
  flex-wrap: wrap;
  height: 300px;
  width: 600px;
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(8.5px);
  border-radius: 10px;
  color: #ffffff;
  text-transform: uppercase;
  letter-spacing: 0.4rem;
  ;

  `
