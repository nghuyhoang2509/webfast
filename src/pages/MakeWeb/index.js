import React from "react";
import "./Styles.scss";

import { Row, Col, Typography } from "antd";

export default function MakeWeb() {
  return (
    <div>
      <Row className="container">
        <Col className="menu-tool" span={6}>
          <Typography.Title className="title">WebFast</Typography.Title>
        </Col>
        <Col className="board" span={18}></Col>
      </Row>
    </div>
  );
}
