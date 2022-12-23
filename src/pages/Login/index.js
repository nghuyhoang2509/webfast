import React, { useEffect } from "react";
import "./Styles.scss";
import { Row, Col, Typography, Button } from "antd";
import { useDispatch, useSelector } from "react-redux";

import { useNavigate, useLocation } from "react-router-dom";

import { login } from "../../features/auth";
import {
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../../firebase";

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const authCurrent = useSelector((state) => state.auth);
  async function handleClickLogin() {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider);
  }
  useEffect(() => {
    if (authCurrent.email) {
      let from = location.state?.from?.pathname || "/";
      navigate(from, { replace: true });
    }
    const unSub = onAuthStateChanged(auth, (currentUser) => {
      dispatch(
        login({
          email: currentUser.email,
          name: currentUser.displayName,
          uid: currentUser.uid,
        })
      );
    });

    return () => {
      unSub();
    };
    // eslint-disable-next-line
  }, [dispatch, authCurrent.email]);

  return (
    <Row>
      <Col className="left-pattern flex-center" span={12}>
        <Typography.Title className="title">WebFast</Typography.Title>
        <Button
          onClick={() => handleClickLogin()}
          className="btn-login flex-center mt-4"
          size="large"
        >
          <img
            className="mr-2"
            alt=""
            src="https://img.icons8.com/color/36/null/google-logo.png"
          />
          <span>Login with Google</span>
        </Button>
      </Col>
      <Col className="right-pattern" span={12}></Col>
    </Row>
  );
}
