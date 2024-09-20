import React from 'react';

import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { FaSearch } from "react-icons/fa";
import ProfileCard from '../Components/ProfileCard';

function Projects() {
  return (
    <div className='container my-5'>
      <div className="text-center">
        <h1>All Projects</h1>
      </div>
      
      {/* Search Input */}
      <div className="d-flex justify-content-center my-4">
        <InputGroup style={{ width: '300px' }}>
          <Form.Control
            placeholder="Technologies"
            aria-label="Technologies"
          />
          <InputGroup.Text>
          <FaSearch /> {/* Bootstrap Search Icon */}
          </InputGroup.Text>
        </InputGroup>
      </div>









      <div className="row my-5">


         
     <ProfileCard/>


      </div>
    </div>
  );
}

export default Projects;
