
import { Button, Card, Form } from 'react-bootstrap';
import { FaArrowAltCircleUp } from "react-icons/fa";
import React, { useState } from 'react';
import { MDBCollapse } from 'mdb-react-ui-kit';

function Profile() {

    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => setIsOpen(!isOpen);
  return (
    <div>
      <Card className="p-4 shadow">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h3>Profile Update</h3>
          {/* Move the button to the right */}
          <button onClick={toggleOpen} className="btn" style={{ background: 'none', border: 'none' }}>
            <FaArrowAltCircleUp size={24} />
          </button>
        </div>
         
        <MDBCollapse open={isOpen}>

        <div className="text-center mb-4">
          <i className="fas fa-user-circle fa-5x text-muted"></i>
        </div>
        <Form>
          <Form.Group controlId="formGithub">
            <Form.Label>Github</Form.Label>
            <Form.Control type="text" placeholder="Enter Github URL" />
          </Form.Group>
          <Form.Group controlId="formLinkedIn" className="mt-3">
            <Form.Label>LinkedIn</Form.Label>
            <Form.Control type="text" placeholder="Enter LinkedIn URL" />
          </Form.Group>
          <Button variant="success" className="mt-4 w-100">
            Update
          </Button>
        </Form>
        </MDBCollapse>

      </Card>

      
    </div>
    
  );
}

export default Profile;
