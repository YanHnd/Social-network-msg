import React from "react";
import img from "../../img/receiver.jpg";
import Upload from "../components/upload";
import Disponible from "../components/disponible";
const Rightbar = (props) => {
  return (
    <div className="flex flex-col py-6 w-1/5 flex-shrink-0 bg-blue-200">
      <div className="flex flex-row justify-center h-12 w-full">
        <div className="font-bold text-2xl font-sans">Shared files</div>
      </div>

      <div className="flex flex-col items-center bg-blue-300 mt-8 w-full py-6 px-4 rounded-2xl">
        <img
          src={props.img}
          alt="img"
          className="w-10 sm:w-16 h-10 sm:h-16 rounded-full"
        />
        <div className="text-sm font-semibold mt-2">{props.name}</div>
      </div>
      <div className="p-6"></div>
      <Upload />
    </div>
  );
};

export default Rightbar;
