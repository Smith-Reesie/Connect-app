import React from "react";

function RequestCards({ recievedReq, acceptBtn, declineBtn }) {
  return (
    <div class="flex flex-row items-center justify-between content-center bg-[#136337] border-round  text-red-500 ">
      <div class="avatar flex justify-items-center items-center ">
        <div class="m-2 w-20 h-12 mask mask-hexagon-2 hover:mask-hexagon">
          <img
            src="http://daisyui.com/tailwind-css-component-profile-1@94w.png"
            alt="avatar"
          ></img>
        </div>
      </div>
      <h6> Request from, {recievedReq.requestor.username}</h6>
      <button class="button" onClick={() => acceptBtn(recievedReq)}>
        Accept
      </button>
      <button class="dclBtn" onClick={() => declineBtn(recievedReq)}>
        Decline
      </button>
    </div>
  );
}

{
  /* <div class="flex flex-row items-center justify-between content-center bg-slate-700 border-round  text-red-500 ">
  <div class="avatar flex justify-items-center items-center ">
    <div class="mb-8 w-20 h-12 mask mask-hexagon-2">
      <img
        src={"http://daisyui.com/tailwind-css-component-profile-1@94w.png"}
        alt="avatar"
      ></img>
    </div>
  </div>
  <h1>{friend.username}</h1>
  <h4>{friend.email}</h4>
  <button class="button" onClick={() => removeFriend(friend)}>
    Defriend
  </button>
</div>; */
}

export default RequestCards;
