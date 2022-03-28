import React from "react";
import { useNavigate } from "react-router-dom";

import {
  RiHome3Line,
  RiCalendar2Line,
  RiChat1Line,
  RiMapPinUserLine,
  RiLogoutCircleLine,
} from "react-icons/ri";

function NavBar({ onLogout }) {
  function handleLogout() {
    fetch("/logout", {
      method: "DELETE",
    }).then(() => onLogout());
  }

  const history = useNavigate();

  return (
    <div class="w-24 flex flex-col items-center mt-2">
      <div class=" mask mask-hexagon-2 h-12 w-12">
      </div>
      <SideBarIcon icon={<RiHome3Line size="40" />} text="Home" />
      <SideBarIcon icon={<RiCalendar2Line size="40" />} text="Coming Soon!" />
      <SideBarIcon icon={<RiChat1Line size="40" />} text="Coming Soon!" />
      <SideBarIcon icon={<RiMapPinUserLine size="40" />} text="Coming Soon!" />
      <span
        onClick={() => {
          handleLogout();
          history("/");
        }}
        class=" mt-60 logout"
      >
        <SideBarIcon icon={<RiLogoutCircleLine size="40" />} text="Log out" />
      </span>
    </div>
  );
}

const SideBarIcon = ({ icon, text = "tooltip  ⛓" }) => (
  <div className="sidebar-icon group ">
    {icon}
    <span class="sidebar-tooltip group-hover:scale-100 ">{text} </span>
    
  </div>
);

export default NavBar;
