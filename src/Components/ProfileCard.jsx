import React, { useState } from "react";
import { serverUrl } from "../Services/serverUrl";

import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardImage,
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
} from "mdb-react-ui-kit";
import { FaGithub } from "react-icons/fa";
import { FaLink } from "react-icons/fa6";


function ProfileCard({ projects }) {
 

  const [optSmModal, setOptSmModal] = useState(false);

  const toggleOpen = () => setOptSmModal(!optSmModal);

  return (
    <div className="col-12 col-md-6 col-lg-3 mb-4">
      {/* Card */}
      <MDBCard onClick={toggleOpen}>
        <MDBCardImage
          src={projects? `${serverUrl}/uploads/${projects.projectImg}`    :"https://i.pinimg.com/originals/23/8e/a6/238ea679ba9cecce8b3f8c4ebf9d151d.jpg"}
          position="top"
          alt="..."
        />
        <MDBCardBody>
          <div className="text-center">
            <MDBCardTitle>{projects.title}</MDBCardTitle>
          </div>
        </MDBCardBody>
      </MDBCard>

      {/* Modal */}
      <MDBModal
        open={optSmModal}
        tabIndex="-1"
        onClose={() => setOptSmModal(false)}
      >
        <MDBModalDialog size="lg">
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Project Name</MDBModalTitle>
              <MDBBtn
                className="btn-close"
                color="none"
                onClick={toggleOpen}
              ></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
              <div className="row my-5">
                <div className="col-6">
                  <img
                    width={"300px"}
                    height={"300px"}
                    src="https://i.pinimg.com/originals/23/8e/a6/238ea679ba9cecce8b3f8c4ebf9d151d.jpg"
                    alt=""
                  />
                </div>

                <div className="col-6">
                  <h3>Description</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Autem minima enim tenetur ullam sunt quas perspiciatis,
                    deserunt aut provident deleniti fugit maiores reprehenderit
                    itaque dolorem veritatis dolorum magnam? Quae, quia.
                  </p>
                  <h4>Technologies: React</h4>
                  <hr />
                </div>

                <div className="row d-flex justify-content-end">
                  <span>
                    <FaGithub className="fs-2" />{" "}
                    <FaLink className="fs-2 mx-3" />
                  </span>
                </div>
              </div>
            </MDBModalBody>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </div>
  );
}

export default ProfileCard;
