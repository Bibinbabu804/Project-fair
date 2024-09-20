import React, { useState } from 'react'


import { Link } from 'react-router-dom'
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBBtn
  } from 'mdb-react-ui-kit';

  import {

    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody
  } from 'mdb-react-ui-kit';
  import { FaGithub } from "react-icons/fa";
  import { FaLink } from "react-icons/fa6";
import ProfileCard from '../Components/ProfileCard';

function Home() {



    const [optSmModal, setOptSmModal] = useState(false);

    const toggleOpen = () => setOptSmModal(!optSmModal);
  return (
    <div>
       <section>
  
  <div className="container-lg my-5 ">
  
<div className="row">
 
<div className="col-md-6 my-5">

<h1 className='fs-1 my-5'>Project-Fair</h1>
<p style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta eum, molestiae praesentium aperiam dolore, natus incidunt error repellat perspiciatis omnis delectus cumque reiciendis excepturi voluptatum aliquid sapiente quae, sequi dignissimos?</p>

<Link to={'/login'}>
<button style={{backgroundColor:'navy', height:'50px', width:'150px'}} className='btn btn-info'>Get Started</button>
</Link>



</div>

<div className="col-md-6 ">
<img width={'500PX'} src="https://assets.website-files.com/6174a877844b8d384f2230b9/621405faf156b68381c89877_Untitled%20design.gif" alt="" />
</div>
</div>
</div>
</section>
      

<div className="container-lg my-5">

<div className="row ">
<div className='text-center my-5'>
<h2 className='text-black'>Explore Our Projects</h2>
  </div>

<ProfileCard/>



</div>
    </div>
    </div>
    
  )
}

export default Home