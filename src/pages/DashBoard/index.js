import React from "react";
import "./Styles.scss";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../features/auth";
import { Button } from "antd";

import { auth } from "../../firebase";

export default function DashBoard() {
  const dispatch = useDispatch();
  const authName = useSelector((state) => state.auth.name);
  return (
    <div className="wrapper">
      <div className="logout">
        {`Hello! ${authName}`}
        <Button
          onClick={() => {
            auth.signOut();
            dispatch(logout());
          }}
          className="m-2"
        >
          Logout
        </Button>
      </div>
    </div>
  );
}
