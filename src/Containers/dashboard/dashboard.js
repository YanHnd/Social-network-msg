import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import { test } from "../../Redux/Actions/authUser";

export default function Dashboard() {
  const dispatch = useDispatch();

  const testest = () => {
    dispatch(test());
  };
  return (<button onClick={testest}>yesss</button>)
}
