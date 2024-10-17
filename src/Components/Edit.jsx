import React, { useContext } from 'react';
import { useEffect, useState } from 'react';
import { Modal, Button, Form, Row, Col } from 'react-bootstrap';
import userimg from "../assets/profile.png";
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { serverUrl } from '../Services/serverUrl';
import { editProjectAPI } from '../Services/AllApi';
import { editProjectContextResponse } from '../ContextApi/ContextShare';


function Edit({item}) {

    console.log(item);

    const {editProjectRes,setEditProjectRes}=useContext(editProjectContextResponse)
    
    const [showModal, setShowModal] = useState(false);

    // Handlers to open and close the modal
    const handleShow = () => setShowModal(true);
    const handleClose = () =>{


        setShowModal(false)
        setProjectDetails({id:item._id,title: item.title, language:item.language, github:item.github, website:item.website, overview: item.overview, projectImg: item.projectImg})

        SetPreview('')

  




    } 

    const [projectDetails, setProjectDetails] = useState({
       id:item._id, title: item.title, language:item.language, github:item.github, website:item.website, overview: item.overview, projectImg: item.projectImg
    });

    const [imgFileStatus, setimgFileStatus] = useState(false);
    const [previev, SetPreview] = useState('');

    useEffect(() => {
        if (projectDetails.projectImg.type === 'image/png' || projectDetails.projectImg.type === 'image/jpg' || projectDetails.projectImg.type === 'image/jpeg') {
            setimgFileStatus(true);
            SetPreview(URL.createObjectURL(projectDetails.projectImg));
        } else {
            setimgFileStatus(false);
        }
    }, [projectDetails.projectImg]);

    const handleEdit= async () => {
        const { id,title, language, github, website, projectImg, overview } = projectDetails;
console.log('inside edit');

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
                    // API call to add project
                    const response = await editProjectAPI(id,reqBody, reqHeader);
                    if (response.status >= 200 && response.status <= 300) {
                        setEditProjectRes(response.data)
                        // toast.success('Project Edited successfully', {
                        //     position: "top-center",
                        //     autoClose: 5000,
                        //     hideProgressBar: false,
                        //     closeOnClick: true,
                        //     pauseOnHover: true,
                        //     draggable: true,
                        //     progress: undefined,
                        //     theme: "colored",
                        //     transition: Bounce,
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
            {/* Icon for Editing Project */}
            <Button variant="link" onClick={handleShow}>
                {/* Replace this with your Edit icon */}
                <i className="fas fa-edit"></i> {/* Example: FontAwesome edit icon */}
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

                                    <img width={'100%'} src={previev? previev: `${serverUrl}/uploads/${projectDetails.projectImg}`   } alt="Project Image" />

                                </label>
                                {!imgFileStatus && <div className='text-center fw-bolder my-5 text-danger'>Only allowed the following files jpg,jpeg,png</div>}
                            </div>
                        </Col>

                        {/* Form Section */}
                        <Col md={6}>
                            <Form>
                                <Form.Group controlId="formTitle">
                                    <Form.Control onChange={(e) => setProjectDetails({ ...projectDetails, title: e.target.value })} value={projectDetails.title} type="text" placeholder="Enter project title" />
                                </Form.Group>
                                <Form.Group controlId="formLanguage" className="mt-3">
                                    <Form.Control onChange={(e) => setProjectDetails({ ...projectDetails, language: e.target.value })} value={projectDetails.language} type="text" placeholder="Enter project language" />
                                </Form.Group>
                                <Form.Group controlId="formGithub" className="mt-3">
                                    <Form.Control onChange={(e) => setProjectDetails({ ...projectDetails, github: e.target.value })} value={projectDetails.github} type="text" placeholder="Enter Github URL" />
                                </Form.Group>
                                <Form.Group controlId="formWebsite" className="mt-3">
                                    <Form.Control onChange={(e) => setProjectDetails({ ...projectDetails, website: e.target.value })} value={projectDetails.website} type="text" placeholder="Enter website URL" />
                                </Form.Group>
                                <Form.Group controlId="formOverview" className="mt-3">
                                    <Form.Control onChange={(e) => setProjectDetails({ ...projectDetails, overview: e.target.value })} value={projectDetails.overview} as="textarea" rows={3} placeholder="Enter project overview" />
                                </Form.Group>
                            </Form>
                        </Col>
                    </Row>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="success" onClick={handleEdit}>
                        Update
                    </Button>
                </Modal.Footer>
            </Modal>
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

export default Edit;
