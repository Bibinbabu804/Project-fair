import React, { useContext, useEffect, useState } from 'react';
import { Modal, Button, Form, Row, Col } from 'react-bootstrap';
import userimg from "../assets/profile.png"; // Assuming you have a default user image
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addProjectAPI } from '../Services/AllApi'; // Assuming your API call service is correctly set up
import { addProjectContextResponse } from '../ContextApi/ContextShare'; // Assuming you have this context

function Add() {
  const { addProjectRes, setAddProjectRes } = useContext(addProjectContextResponse);

  const [showModal, setShowModal] = useState(false);
  const [imgFileStatus, setimgFileStatus] = useState(false);
  const [preview, SetPreview] = useState(userimg);
  const [projectDetails, setProjectDetails] = useState({
    title: '',
    language: '',
    github: '',
    website: '',
    overview: '',
    projectImg: '',
  });

  // Handlers to open and close the modal
  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  // Watch for changes in the project image and validate it
  useEffect(() => {
    if (projectDetails.projectImg) {
      if (['image/png', 'image/jpg', 'image/jpeg'].includes(projectDetails.projectImg.type)) {
        setimgFileStatus(true);
        SetPreview(URL.createObjectURL(projectDetails.projectImg));
      } else {
        setimgFileStatus(false);
      }
    }
  }, [projectDetails.projectImg]);

  const handleAdd = async () => {
    const { title, language, github, website, projectImg, overview } = projectDetails;

    if (!title || !language || !github || !website || !projectImg || !overview) {
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
      const reqBody = new FormData();
      reqBody.append("title", title);
      reqBody.append("language", language);
      reqBody.append("github", github);
      reqBody.append("website", website);
      reqBody.append("projectImg", projectImg);
      reqBody.append("overview", overview);

      const token = sessionStorage.getItem('token');
      if (token) {
        const reqHeader = {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${token}`
        };

        try {
          const response = await addProjectAPI(reqBody, reqHeader);
          if (response.status >= 200 && response.status <= 300) {
            setAddProjectRes(response.data);
            // toast.success('Project Added Successfully', {
            //   position: "top-center",
            //   autoClose: 5000,
            //   hideProgressBar: false,
            //   closeOnClick: true,
            //   pauseOnHover: true,
            //   draggable: true,
            //   progress: undefined,
            //   theme: "colored",
            //   transition: Bounce,
            // });
            handleClose();
            SetPreview(userimg);
          } else {
            toast.error(response.response.data, {
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
        } catch (error) {
          console.error(error);
        }
      }
    }
  };

  return (
    <div>
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
                  <input onChange={(e) => setProjectDetails({ ...projectDetails, projectImg: e.target.files[0] })} type="file" style={{ display: 'none' }} />
                  <img width={'100%'} src={preview} alt="" />
                </label>
                {!imgFileStatus && (
                  <div className='text-center fw-bolder my-5 text-danger'>
                    Only allowed the following files: jpg, jpeg, png
                  </div>
                )}
              </div>
            </Col>

            {/* Form Section */}
            <Col md={6}>
              <Form>
                <Form.Group controlId="formTitle">
                  <Form.Control onChange={(e) => setProjectDetails({ ...projectDetails, title: e.target.value })} type="text" placeholder="Enter project title" />
                </Form.Group>
                <Form.Group controlId="formLanguage" className="mt-3">
                  <Form.Control onChange={(e) => setProjectDetails({ ...projectDetails, language: e.target.value })} type="text" placeholder="Enter project language" />
                </Form.Group>
                <Form.Group controlId="formGithub" className="mt-3">
                  <Form.Control onChange={(e) => setProjectDetails({ ...projectDetails, github: e.target.value })} type="text" placeholder="Enter Github URL" />
                </Form.Group>
                <Form.Group controlId="formWebsite" className="mt-3">
                  <Form.Control onChange={(e) => setProjectDetails({ ...projectDetails, website: e.target.value })} type="text" placeholder="Enter website URL" />
                </Form.Group>
                <Form.Group controlId="formOverview" className="mt-3">
                  <Form.Control onChange={(e) => setProjectDetails({ ...projectDetails, overview: e.target.value })} as="textarea" rows={3} placeholder="Enter project overview" />
                </Form.Group>
              </Form>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="success" onClick={handleAdd}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Toast Container */}
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
        theme="colored"
      />
    </div>
  );
}

export default Add;
