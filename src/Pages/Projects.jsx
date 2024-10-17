import React, { useEffect, useState } from 'react';

import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { FaSearch } from "react-icons/fa";
import ProfileCard from '../Components/ProfileCard';
import { getAllProjectsAPI } from '../Services/AllApi';



function Projects() {
  // to hold search reasult
  const [searchKey, setSearchKey] = useState('');
  console.log(searchKey);
  




  const [projects, setProjects] =useState([]);

 const getAllProjects=async()=>{
  let token =sessionStorage.getItem('token')
  if(token){
    const reqHeader= {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`


    }

    try {

      const allProjects = await getAllProjectsAPI(searchKey,reqHeader)

     
      console.log('hi');
      if(allProjects.status >= 200 && allProjects.status <= 300){
        setProjects(allProjects.data)
      }else{
        console.log('cant fetch projects');
        
      }

      


      
    } catch (error) {

      console.log(error);
      
      
    }


  }
   
    
  

  }

 
  
  useEffect(()=>{

    getAllProjects()
    

  



  },[searchKey])
  return (
    <div className='container my-5'>
      <div className="text-center">
        <h1>All Projects</h1>
      </div>
      
      {/* Search Input */}
      <div className="d-flex justify-content-center my-4">
        <InputGroup onChange={(e)=>setSearchKey(e.target.value)} style={{ width: '300px' }}>
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


         
     {

      projects.length > 0 ? projects.map((item,index)=>(

       


       


        <ProfileCard key={index}  projects={item}/>


        






      ))

      : <p>cant fetch data</p>


       
     }


      </div>
    </div>
  );
}

export default Projects;
