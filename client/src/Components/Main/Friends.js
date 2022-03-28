import React from "react";
import FriendCard from "./FriendCard";
import RecievedRequestCards from "./RecievedRequestCards";
import { useState } from "react";
import SentRequestCards from "./SentRequestCards";
import UserCards from "./UserCards";
import Search from "./Search";

function Friends({
  users,
  addFriendBtn,
  recievedReq,
  acceptBtn,
  currentUser,
  friends,
  sentRequest,
  cancelReqBtn,
  declineBtn,
  removeFriend,
  search,
  setSearch
}) {
  const [friendDisplay, setFriendDisplay] = useState('friends');

  function showFriends() {
    setFriendDisplay('friends');
  }
  function showFriendRequest() {
    setFriendDisplay('request');
  }
  function showUsers() {
    setFriendDisplay('users');
  }

  

  return (
    <div>
        <Search search={search} setSearch={setSearch}></Search>
      <div class="flex justify-evenly text-[20px] bg-[#0a0a0a] text-[#136337] underline mb-1 ">
        <button onClick={showFriends}>Friends</button> 
        <button onClick={showUsers}> Users</button>
        <button onClick={showFriendRequest}>Request</button>
      </div>
      {friendDisplay === "users" &&
      <div>
        {users.map((user) => (
          <UserCards key={user.id} user={user} addFriend={addFriendBtn} />
        ))}
      </div>
}

{friendDisplay === "friends" &&
      <div>
        {friends.map((friend) => (
          <FriendCard
            key={friend.id}
            friend={friend}
            removeFriend={removeFriend}
            currentUser={currentUser}
          />
        ))}
      </div>
}


{friendDisplay === "request" &&
<div>
<h1 class=" flex felx-col justify-center items-center text-zinc-800 text-[30px] mt-1 ">Received Request {recievedReq.length}</h1>
      <div>
        {recievedReq.map((rr) => (
          <RecievedRequestCards
            key={rr.id}
            recievedReq={rr}
            acceptBtn={acceptBtn}
            declineBtn={declineBtn}
          />
        ))}
      </div>
</div>
} 

{friendDisplay === "request" &&
<div>
<h1 class=" flex felx-col justify-center items-center text-zinc-800 text-[30px] mt-1 ">Sent Request {sentRequest.length}</h1>
      <div>
        {sentRequest.map((sr) => (
          <SentRequestCards
            key={sr.id}
            sentRequest={sr}
            cancelReqBtn={cancelReqBtn}
          />
        ))}
      </div>
</div>
}


    </div>
  );
}

export default Friends;
