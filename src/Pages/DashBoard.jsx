import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import View from '../Components/View';
import Profile from './Profile';
 // Import the new component
import Add from '../Components/Add';

function DashBoard() {
  return (
    <div className="container p-5 my-5">
      <div className="text-center">
        <h2 className='mb-5'>Welcome user</h2>
      </div>

      <Row className="justify-content-between">
        {/* Left Section (Project Section) */}
        <Col md={8} style={{ maxWidth: '700px' }}>
          <Card className="p-4 shadow">
            {/* "Add Project" button with modal */}
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h4 className="text-info">My Project</h4>
              {/* Use AddProjectModal component here */}
              <Add />
            </div>
            {/* Project card */}
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
