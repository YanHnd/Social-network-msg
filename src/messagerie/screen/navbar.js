import React from "react";

import BLogo from "../buttons/blogo.js";
import { MdHome } from "react-icons/md";
import { RiUserStarFill } from "react-icons/ri";
import { BsFillChatFill } from "react-icons/bs";

const Navbar = () => {
  return (
    <div className="w-16 border-r bg-gray-700 flex items-center flex-col">
      <BLogo />
      <div className="flex flex-col space-y-16 justify-center items-center mt-36">
        <button className="h-10 w-10 text-white text-2xl flex justify-center items-center">
          <MdHome />
        </button>
        <button className="h-10 w-10 text-white text-2xl flex justify-center items-center">
          <RiUserStarFill />
        </button>
        <button className="h-10 w-10 text-white text-xl flex justify-center items-center">
          <BsFillChatFill />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
