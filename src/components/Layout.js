import React from "react";
import { Container } from "react-bootstrap";
import Header from "./Header";
import Title from "./Title";

const Layout = (props) => {
  return (
    <div>
      <Title />
      <Header />
      <Container className="mt-4">{props.children}</Container>
    </div>
  );
};

export default Layout;
