import React, { useState } from 'react';
import {
  Button,
  Form,
  Alert,
} from 'react-bootstrap';
import AuthService from '../api/auth.service';
import Layout from './Layout';

const Signup = (props) => {
  const [errors, setErrors] = useState(null);

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      await AuthService.register({
        username: event.target.username.value,
        email: event.target.email.value,
        password: event.target.password.value,
        password_confirmation: event.target.password_confirmation.value,
        role: 'artist',
      });
    } catch (error) {
      setErrors(error.response.data.errors);
      console.error(error);
    }
  }

  return (
    <Layout>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="username">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" placeholder="Username" />
        </Form.Group>
        <Form.Group controlId="email">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group controlId="password_confirmation">
          <Form.Label>Password Confirmation</Form.Label>
          <Form.Control type="password" placeholder="Password Confirmation" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <div className="mt-3">
        {errors && errors.map((error, index) =>
          <Alert variant="danger" key={index}>{error}</Alert>
        )}
      </div>
    </Layout>
  );
};

export default Signup;