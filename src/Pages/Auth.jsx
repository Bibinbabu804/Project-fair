import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Auth({ register }) {
  return (
    <div>
      <Container fluid className="d-flex justify-content-center align-items-center vh-100">
        <Row className="w-100">
          <Col md={{ span: 6, offset: 3 }} lg={{ span: 4, offset: 4 }}>
            <div className="text-left">
              <Link to="/" className="text-warning mb-3 d-inline-block">
                &larr; Back Home
              </Link>
            </div>
            <div className="bg-light p-4 rounded" style={{ backgroundColor: '#32b39b' }}>
              <div className="text-center mb-3">
                <img
                  src="https://media.lordicon.com/icons/wired/lineal/94-lock-unlock.svg"
                  style={{ width: '100px' }}
                  alt="Lock"
                />
              </div>
              <h3 className="text-center">Project Fair</h3>
              <p className="text-center">
                {register ? 'Create Your Account' : 'Sign In to Your Account'}
              </p>

              {register && (
                <Form.Group controlId="formConfirmPassword">
                  <Form.Control className='my-3' type="text" placeholder="User Name" />
                </Form.Group>
              )}

              <Form>
                <Form.Group controlId="formBasicEmail">
                  <Form.Control className='my-3' type="email" placeholder="Email" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Button variant="warning" className="w-100 mt-3" type="submit">
                  {register ? 'Sign Up' : 'Login'}
                </Button>

                <p className="mt-3 text-center">
                  {register ? (
                    <>
                      Already have an account?{' '}
                      <Link to="/login" className="text-warning">Login Here</Link>
                    </>
                  ) : (
                    <>
                      New User?{' '}
                      <Link to="/register" className="text-warning">Click Here to Register</Link>
                    </>
                  )}
                </p>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Auth;
