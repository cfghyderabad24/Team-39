import React, { useState } from 'react';
import { Card, Form, Button, Container } from 'react-bootstrap';

const Login = ({ navigateToDashboard }) => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [role, setRole] = useState('user');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleRoleChange = (e) => {
    setRole(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login validation
    navigateToDashboard(role);
  };

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <Card style={{ width: '30rem', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)' }}>
        <Card.Body>
          <Card.Title className="text-center mb-4">Login</Card.Title>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formRole">
              <Form.Check
                type="radio"
                label="Admin"
                name="role"
                value="admin"
                checked={role === 'admin'}
                onChange={handleRoleChange}
                className="mb-2"
                style={{ color: 'black' }}
              />
              <Form.Check
                type="radio"
                label="User"
                name="role"
                value="user"
                checked={role === 'user'}
                onChange={handleRoleChange}
                className="mb-3"
                style={{ color: 'black' }}
              />
            </Form.Group>
            <Form.Group controlId="formUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter username"
                name="username"
                value={credentials.username}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
                value={credentials.password}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Button variant="primary" type="submit" className="mt-3 w-100">
              Login
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Login;
