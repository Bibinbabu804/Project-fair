import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProfileCard from '../Components/ProfileCard';
import { getAllProjectsAPI } from '../Services/AllApi';

function Home() {
  const [projects, setProjects] = useState([]);
  const token = sessionStorage.getItem('token');

  const getHomeProjects = async () => {
    if (token) {
      const reqHeader = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      };

      try {
        const allProjects = await getAllProjectsAPI(reqHeader);
        if (allProjects.status >= 200 && allProjects.status <= 300) {
          setProjects(allProjects.data);
        } else {
          console.log('Cannot fetch projects');
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
getHomeProjects()
  }, []);

  return (
    <div>
      <section>
        <div className="container-lg my-5">
          <div className="row">
            <div className="col-md-6 my-5">
              <h1 className='fs-1 my-5'>Project-Fair</h1>
              <p style={{ textAlign: 'justify' }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta eum, molestiae praesentium aperiam dolore, natus incidunt error repellat perspiciatis omnis delectus cumque reiciendis excepturi voluptatum aliquid sapiente quae, sequi dignissimos?
              </p>

              {token ? (
                <Link to={'/dashboard'}>
                  <button style={{ backgroundColor: 'navy', height: '60px', width: '200px' }} className='btn btn-info'>View Dashboard</button>
                </Link>
              ) : (
                <Link to={'/login'}>
                  <button style={{ backgroundColor: 'navy', height: '50px', width: '150px' }} className='btn btn-info'>Get Started</button>
                </Link>
              )}
            </div>

            <div className="col-md-6">
              <img width={'500PX'} src="https://assets.website-files.com/6174a877844b8d384f2230b9/621405faf156b68381c89877_Untitled%20design.gif" alt="" />
            </div>
          </div>
        </div>
      </section>

      <div className="container-lg my-5">
        <div className="row">
          <div className='text-center my-5'>
            <h2 className='text-black'>Explore Our Projects</h2>
          </div>

          {/* Render only the first 3 ProfileCard for the available projects */}
          {projects.length > 0 ? (
            projects.slice(0, 4).map((project, index) => (
              <ProfileCard key={index} projects={project} />
            ))
          ) : (
            <p>No projects available</p>
          )}
        </div>
      </div>

      <div className='text-center'>
        <Link to={'/projects'}>
          <button style={{ backgroundColor: "navy", color:'white' }} className='btn p-3'>VIEW ALL PROJECT</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
