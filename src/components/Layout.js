import React from 'react';
import { Container } from 'react-bootstrap';
import Header from './Header';

const Layout = (props) => {
  return (
    <div>
      <Header />
      <Container className="mt-4">
        {props.children}
      </Container>
    </div>
  );
};

export default Layout;
