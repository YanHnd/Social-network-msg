import React, { useState, useEffect } from "react";

import RightBar from "./screen/rightbar";
import Navbar from "./screen/navbar";
import Sidebar from "./screen/sidebar";

import image from "../img/friend5.jpg";
import Person from "./components/person";
import SearchP from "./components/searchP";
import Messages from "./components/messages";

import { useDispatch, useSelector } from "react-redux";
import {
  getConversations,
  getRealtimeMessages,
} from "../Redux/Actions/dataActions";
import Conversation from "./components/conversation";

const Messagerie = (props) => {
  const [infos, setInfos] = useState({ name: "", img: {} });
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data);
  const name = infos.name;

  useEffect(() => {
    getConversations(dispatch, "mohand");
  }, []);

  const get_user = (name, img) => {
    const name_user = name;
    const img_user = img;
    setInfos({
      name: name_user,
      img: img_user,
    });
  };
  const click = (user) => {
    getRealtimeMessages(dispatch, user);
  };

  return (
    <div className="flex h-screen antialiased text-gray-800">
      <Navbar />
      <div className="flex flex-row h-full w-full overflow-hidden">
        <div className="p-2 w-2/6 bg-blue-200">
          <div className="grid place-items-center bg-blue-200">
            <Person name="Me" />
            <button className="bg-gradient-to-r from-blue-700 to-blue-400 hover:from-blue-600 hover:to-blue-300 text-white font-semibold hover:text-white py-1 px-1 rounded content-center focus:outline-none">
              Available
            </button>
            <SearchP />
          </div>
          <Messages
            parentGetUser={get_user}
            users={data.conversations}
            Click={click}
          />
        </div>
        {name === "" ? null : (
          <Conversation cnvslctd="yes" name={infos.name} img={infos.img} />
        )}
        <RightBar name={infos.name} img={infos.img} />
      </div>
    </div>
  );
};

export default Messagerie;
