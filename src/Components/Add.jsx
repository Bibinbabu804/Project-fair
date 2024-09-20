import React, { useState } from 'react';
import { Modal, Button, Form, Row, Col } from 'react-bootstrap';

function Add() {
  const [showModal, setShowModal] = useState(false);

  // Handlers to open and close the modal
  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  return (
    <>
      {/* "Add Project" Button */}
      <Button variant="success" onClick={handleShow}>
        Add Project
      </Button>

      {/* Modal for Adding Project */}
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Project</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            {/* Image Section */}
            <Col md={6}>
              <div className="text-center">
                <label>
                  <input type="file" style={{ display: 'none' }} />
                  <img
                    width={'100%'}
                    src="https://flearningstudio.com/wp-content/uploads/2021/06/414x364-7.jpg"
                    alt=""
                  />
                </label>
              </div>
            </Col>

            {/* Form Section */}
            <Col md={6}>
              <Form>
                <Form.Group controlId="formTitle">
                  <Form.Control type="text" placeholder="Enter project title" />
                </Form.Group>
                <Form.Group controlId="formLanguage" className="mt-3">
                  <Form.Control type="text" placeholder="Enter project language" />
                </Form.Group>
                <Form.Group controlId="formGithub" className="mt-3">
                  <Form.Control type="text" placeholder="Enter Github URL" />
                </Form.Group>
                <Form.Group controlId="formWebsite" className="mt-3">
                  <Form.Control type="text" placeholder="Enter website URL" />
                </Form.Group>
                <Form.Group controlId="formOverview" className="mt-3">
                  <Form.Control as="textarea" rows={3} placeholder="Enter project overview" />
                </Form.Group>
              </Form>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="success" onClick={handleClose}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Add;
