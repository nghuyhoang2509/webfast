import React, { useState } from "react";
import "./Styles.scss";
import { Header1, Header2 } from "./Header";
import { Row, Col, Menu } from "antd";

function getItem(label, key, children, type) {
  return {
    key,
    children,
    label,
    type,
  };
}
const items = [
  getItem("Headers", "headers", [
    getItem(
      "header",
      "header",
      [getItem("Simple header #1", "h1"), getItem("Simple header #2", "h2")],
      "group"
    ),
    getItem("navbar", "navbar", [getItem("navbar #1", "n1")], "group"),
  ]),
  getItem("Gallerys", "gallerys", [
    getItem("3 column", "g1"),
    getItem("4 column", "g2"),
    getItem("2 column", "g3"),
  ]),
  getItem("Article", "article", [
    getItem("Article #1", "a1"),
    getItem("Article #2", "a2"),
  ]),
  getItem("Save", "save"),
];

export default function MakeWeb() {
  const [components, setComponents] = useState([
    <Header1></Header1>,
    <Header2></Header2>,
  ]);
  return (
    <div>
      <Row className="container">
        <Col className="menu-tool" span={6}>
          <Menu
            style={{
              width: "100%",
            }}
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            mode="inline"
            items={items}
            className="w-auto"
          />
        </Col>
        <Col className="board" span={18}>
          <Row className="row">
            {components.map((component, index) => (
              <span key={index}>{component}</span>
            ))}
          </Row>
        </Col>
      </Row>
    </div>
  );
}
