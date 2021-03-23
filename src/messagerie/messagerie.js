import React, { useState, useEffect } from "react";

import RightBar from "./screen/rightbar";
import Navbar from "./screen/navbar";
import Sidebar from "./screen/sidebar";

import msgg from "../img/logo.png";

import Btext from "./buttons/buttontext";

import ConvNull from "./components/convNull";

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
  const [username, setUser] = useState("");
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data);
  const name = infos.name;
  const [unsub, setUnsub] = useState();
  const [prec, setPrec] = useState(infos.name);
  // console.log(prec);
  // console.log("name", infos.name);
  console.log(username);

  useEffect(() => {
    getConversations(dispatch, "mohand");
  }, []);

  const get_user = (name, username, img) => {
    const name_user = name;
    const img_user = img;
    setUser(username);
    setPrec(infos.name);

    setInfos({
      name: name_user,
      img: img_user,
    });
  };
  const Click = (user) => {
    // if (prec != infos.name) {

    if (typeof unsub != "undefined") {
      setPrec(name);

      unsub.unsubscribe();
      let unsubscribe = getRealtimeMessages(dispatch, user);
      setUnsub({ unsubscribe });
    } else {
      let unsubscribe = getRealtimeMessages(dispatch, user);
      setUnsub({
        unsubscribe,
      });
      setPrec(name);
    }
    //  }
  };

  return (
    <div className="flex h-screen antialiased text-gray-800">
      <Navbar />
      <div className="flex flex-row h-full w-full overflow-hidden">
        <div className="p-2 w-2/6 bg-gray-50">
          <SearchP />

          <Messages
            parentGetUser={get_user}
            users={data.conversations}
            Click={Click}
          />
        </div>
        {name === "" ? (
          <ConvNull />
        ) : (
          <Conversation
            // grp="yes"
            cnvslctd="yes"
            convId={infos.name}
            username={username}
            img={infos.img}
          />
        )}
        <RightBar name={infos.name} img={infos.img} />
      </div>
    </div>
  );
};

export default Messagerie;
