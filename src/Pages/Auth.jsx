import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { registerAPI, loginAPI } from '../Services/AllApi';  // Ensure loginAPI is imported
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Spinner from 'react-bootstrap/Spinner';

function Auth({ register }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(false); // To control the spinner
  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleRegister = async () => {
    const { username, email, password } = userData;
    if (!username || !email || !password) {
      toast.info('Please fill the form', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
      });
    } else {
      setLoading(true);  // Start showing the spinner
      const response = await registerAPI(userData);
      setLoading(false);  // Hide the spinner after response

      if (response.status >= 200 && response.status <= 300) {
        toast.success('Registered Successfully', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          transition: Bounce,
        });

        setTimeout(() => {
          navigate('/login');
        }, 4000);

        setUserData({ username: '', email: '', password: '' });
      } else {
        toast.warn(response.response.data, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          transition: Bounce,
        });
      }
    }
  };

  const handleLogin = async () => {
    const { email, password } = userData;
    if (!email || !password) {
      toast.info('Please fill the form', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
      });
    } else {
      setLoading(true);  // Start showing the spinner
      const response = await loginAPI(userData);

      setTimeout(() => {
        
        setLoading(false);  // Stop showing the spinner
      }, 4000);
      
      
      // Hide the spinner after response

      if (response.status >= 200 && response.status <= 300) {
        setIsLoggedIn(true);
        toast.success('Login Successful', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          transition: Bounce,
        });

        sessionStorage.setItem("user", JSON.stringify(response.data.user));
        sessionStorage.setItem("token", response.data.token);

        setTimeout(() => {
          navigate('/');
        }, 3000);

        setUserData({ username: '', email: '', password: '' });
      } else {
        toast.warn(response.response.data, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          transition: Bounce,
        });
      }
    }
  };

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
                  <Form.Control
                    onChange={(e) => setUserData({ ...userData, username: e.target.value })}
                    className='my-3'
                    type="text"
                    placeholder="Username"
                  />
                </Form.Group>
              )}

              <Form>
                <Form.Group onChange={(e) => setUserData({ ...userData, email: e.target.value })} controlId="formBasicEmail">
                  <Form.Control className='my-3' type="email" placeholder="Email" />
                </Form.Group>

                <Form.Group onChange={(e) => setUserData({ ...userData, password: e.target.value })} controlId="formBasicPassword">
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Button
                  onClick={register ? handleRegister : handleLogin}
                  variant="warning"
                  className="w-100 mt-3"
                  disabled={loading}  // Disable the button while loading
                >
                  {loading ? (
                    <Spinner animation="border" size="sm" />
                  ) : (
                    register ? 'Sign Up' : 'Login'
                  )}
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

      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
}

export default Auth;
