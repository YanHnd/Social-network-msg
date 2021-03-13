import React from "react";
import { useHistory } from "react-router-dom";
import logo from "../img/logo.png";

export default function Dashboard() {
  const history = useHistory();
  const hundleClick = () => history.push("/signin");
  const hundleClick2 = () => history.push("/signup");

  return (
    <div className="flex flex-col bg-img1 h-screen bg-cover bg-center">
      <div className="h-full bg-blue-900 bg-opacity-80">
        <div className="grid grid-cols-3 gap-4">
          <div className="col-start-1 col-end-3 pl-2 pt-2">
            <img src={logo} alt="" width="50px" />
          </div>
          <div className="flex flex-row items-end justify-end">
            <div className="p-2 text-gray-100 ">
              <a className="pr-4" href="#dash2">
                About Us
              </a>
            </div>

            <div className="pt-2 pr-2">
              <button
                onClick={hundleClick}
                className="bg-transparent hover:bg-gray-600 text-gray-100 font-semibold hover:text-gray-50 py-2 px-4 border border-gray hover:border-transparent rounded-full mr-2"
              >
                Sign In
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-6 gap-4 text-gray-100 mx-auto ">
          <div className="col-start-1 col-end-7 mx-auto">
            <h1 className=" font-mono text-7xl mx-auto pt-48 text-gray-100">
              StudApp
            </h1>
          </div>
          <div className="col-start-1 col-end-7 mx-auto">
            <ul>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
              <li className="pl-12">Vivamus fermentum venenatis pulvinar. </li>
            </ul>
          </div>
          <div className="col-start-1 col-end-7 mx-auto pt-12">
            <button
              onClick={hundleClick2}
              className=" bg-red-800 hover:bg-gray-600 text-gray-100 font-semibold hover:text-gray-50 py-2 px-4 border border-transparent  hover:border-transparent rounded-full"
            >
              Getting started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
