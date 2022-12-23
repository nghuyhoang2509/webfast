import React from "react";
import { Col } from "antd";
import "./Styles.scss";

export const Header1 = ({ title, link, tagline }) => {
  return (
    <Col
      suppressContentEditableWarning
      contentEditable={true}
      className="text-center pt-4 pb-4"
    >
      <h5>{title || "Hello World"}</h5>
      <h1>{tagline || "Lorem ipsum dolor sit amet."}</h1>
      <a href="/">{link || "Read more"}</a>
    </Col>
  );
};

export const Header2 = ({ title, link, tagline, button }) => {
  return (
    <div className="m-0">
      <div className="text-center">
        <h1 className="">{title || "Hello World"}</h1>
        <p className="">{tagline || "Lorem ipsum dolor sit amet."}</p>
        <a className="" href="#">
          {button || "Click here"}
        </a>
        <a className="" href="#">
          {link || "Read more"}
        </a>
      </div>
    </div>
  );
};
