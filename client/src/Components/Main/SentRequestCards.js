import React from "react";

function SentRequestCards({ sentRequest, cancelReqBtn }) {
  return (

    <div class="flex flex-row items-center justify-between content-center text-xl bg-[#136337] border-round  text-white hover:text-orange-500 mb-4 border-double rounded-full w-42">
    <div class="avatar flex justify-items-center items-center  ">
      <div class="m-2 w-20 h-12 mask mask-hexagon-2 hover:mask-hexagon">
        <img
          src="http://daisyui.com/tailwind-css-component-profile-1@94w.png"
          alt="avatar"
        ></img>
      </div>
    </div>
    <h6> Sent Request to, {sentRequest.reciever.username}</h6>
    <button class="dclBtn rounded-full" onClick={()=>cancelReqBtn(sentRequest)}>
      Cancel
    </button>
  </div>

  
  );
}

export default SentRequestCards;
