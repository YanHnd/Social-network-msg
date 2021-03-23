import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getConversations,
  getRealtimeMessages,
} from "../Redux/Actions/dataActions";
import Person from "../messagerie/components/person";
import SearchP from "../messagerie/components/searchP";

const Chat = (props) => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data);

  useEffect(() => {
    getConversations(dispatch, "mohand");
    console.log(data.conversations);
  }, []);
  return (
    <div className="flex h-screen antialiased text-gray-800 grid-cols-3 gap-4 ">
      <div className="m-4 p-2 w-2/6 bg-white-200 grid-cols-3 ">
        <Person name="Me" />
        <button className="bg-gradient-to-r from-blue-700 to-blue-400 hover:from-blue-600 hover:to-blue-300 text-white font-semibold hover:text-white py-1 px-1 rounded content-center focus:outline-none">
          Available
        </button>
        <SearchP />
      </div>
    </div>
  );
};
export default Chat;
