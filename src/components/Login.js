import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Form, Alert } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import AuthService from "../api/auth.service";
import { setLoggedInUser } from "../store/loggedInUser.slice";
import Layout from "./Layout";

const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [errors, setErrors] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const loggedInUser = await AuthService.login({
        email: event.target.email.value,
        password: event.target.password.value,
      });
      dispatch(setLoggedInUser(loggedInUser));
      history.push("/");
    } catch (error) {
      console.error(error);
      setErrors(error.response.data.errors);
    }
  };

  return (
    <Layout>
      <h1 className="text-center font-weight-bold">Log In</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="email">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Log In
        </Button>
      </Form>
      <div className="mt-3">
        {errors &&
          errors.map((error, index) => (
            <Alert variant="danger" key={index}>
              {error}
            </Alert>
          ))}
      </div>
    </Layout>
  );
};

export default Login;
