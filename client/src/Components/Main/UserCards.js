import React from "react";

function UserCards({ user, addFriend }) {
  const { id, username, first_name, last_name, email, avatar } = user;
  return (
    <div>
      <div class="flex flex-row items-center justify-between content-center text-xl bg-[#136337] border-round  text-white hover:text-orange-500 mb-4 border-double rounded-full ">
        <div class="avatar flex justify-items-center items-center ">
          <div class=" m-2 w-20 h-12 mask mask-hexagon-2 hover:mask-hexagon">
            <img
              src={
                "https://cdn3.iconfinder.com/data/icons/vector-icons-6/96/256-512.png"
              }
              alt="avatar"
            ></img>
          </div>
        </div>
        <h1>@{username}</h1>
        <h3>
          {first_name}{last_name}
        </h3>
        <h4>{email}</h4>
        <button
          class="button bg-green-800 rounded-full"
          value={id}
          onClick={(e) => addFriend(e.target.value)}
        >
          Add Friend
        </button>
      </div>
    </div>
  );
}

//  <div class="flex flex-row items-center justify-between content-center bg-slate-700 border-round  text-red-500 ">
//   <div class="avatar flex justify-items-center items-center ">
//     <div class="mb-8 w-20 h-12 mask mask-hexagon-2">
//       <img
//         src={"http://daisyui.com/tailwind-css-component-profile-1@94w.png"}
//         alt="avatar"
//       ></img>
//     </div>
//   </div>
//   <h1>{friend.username}</h1>
//   <h4>{friend.email}</h4>
//   <button class="button" onClick={() => removeFriend(friend)}>
//     Defriend
//   </button>
// </div>;

export default UserCards;
