import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import View from '../Components/View';
import Profile from './Profile';
import Add from '../Components/Add';
import { useNavigate } from 'react-router-dom';


function DashBoard() {

  const navigate =useNavigate()
  const user = JSON.parse(sessionStorage.getItem('user'));
  let username = user.username;


  const handleLogout =()=>{
    sessionStorage.clear(
      navigate('/')
    )


  }

  return (
    <div className="container p-5 my-5">
      <div className="text-center">
        <h2
          style={{ backgroundColor: 'navy' }}
          className="mb-5 fs-1 bg-info text-light border rounded-5"
        >
          Welcome, {username}
        </h2>
      </div>
      <button 
  onClick={handleLogout} 
  className="btn btn-danger my-5 btn-lg rounded-pill shadow-sm px-4 py-2"
  style={{
    backgroundColor: 'crimson',
    borderColor: 'darkred',
    color: 'white',
    fontWeight: 'bold',
    transition: 'all 0.3s ease',
  }}
  onMouseOver={(e) => e.target.style.backgroundColor = 'darkred'}
  onMouseOut={(e) => e.target.style.backgroundColor = 'crimson'}
>
  Logout
</button>

      <Row className="justify-content-between">
        {/* Left Section (Project Section) */}
        <Col md={8} style={{ maxWidth: '700px' }}>
          <Card className="p-4 shadow">
            {/* "Add Project" button with modal */}
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h4 className="text-info">My Project</h4>
              <Add />
            </div>
            {/* Move the logic to View */}
            <View />
          </Card>
        </Col>

        {/* Right Section (Profile Section) */}
        <Col md={4} style={{ maxWidth: '400px' }}>
          <Profile />
        </Col>
      </Row>
    </div>
  );
}

export default DashBoard;
