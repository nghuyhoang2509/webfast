import React from "react";
import "./Styles.scss";
import { Button, Row, Col, Typography } from "antd";

export default function Login() {
  return (
    <Row>
      <Col className="left-pattern flex-center" span={12}>
        <Typography.Title className="title">WebFast</Typography.Title>
        <Button className="btn-login flex-center mt-4" size="large">
          <img
            className="mr-2"
            alt=""
            src="https://img.icons8.com/color/36/null/google-logo.png"
          />
          Login with Google
        </Button>
      </Col>
      <Col className="right-pattern" span={12}></Col>
    </Row>
  );
}
