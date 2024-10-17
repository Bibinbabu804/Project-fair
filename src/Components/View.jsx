import React, { useContext, useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { deleteProjectAPI, getUserProjectsAPI } from '../Services/AllApi';
import Edit from './Edit';
import { addProjectContextResponse, editProjectContextResponse } from '../ContextApi/ContextShare';



function View() {
  const {addProjectRes,setAddProjectRes} = useContext(addProjectContextResponse)
  const [projects, setProjects] = useState([]);
  const {editProjectRes,setEditProjectRes}=useContext(editProjectContextResponse)

  const getUserProjects = async () => {
    let token = sessionStorage.getItem('token');
    if (token) {
      const reqHeader = {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      };

      try {
        const allProjects = await getUserProjectsAPI(reqHeader);

        if (allProjects.status >= 200 && allProjects.status <= 300) {
          setProjects(allProjects.data);
        } else {
          console.log('Unable to fetch projects');
        }
      } catch (error) {
        console.error(error);
      }
    }
  };

    const handleDelete=async(pid)=>{

      let token =sessionStorage.getItem('token')
      if(token){

        const reqHeader={
          // 'Content-Type':'application/json',
          Authorization:`Bearer ${token}`,
        }
        try {
          const response = await deleteProjectAPI(pid,reqHeader)

          if (response.status==200) {
            console.log('project deleted successfully');
            getUserProjects()
            
            
          }else{
            console.log('Unable to delete project')
          }
          
        } catch (error) {

          
          
        }




      }


    }

  useEffect(() => {
    getUserProjects();
  }, [addProjectRes,editProjectRes]);

  return (
    <div>
      {projects.length > 0
        ? projects.map((item) => (
            <Card className="mb-3" key={item.id}>
              <Card.Body className="d-flex justify-content-between align-items-center">
                <span className="text-muted">{item.title}</span>
                <div>
                  
                  <Edit  item={item}/>
                  <i className="fas fa-globe text-warning mx-2"></i>
                  <i className="fab fa-github text-dark mx-2"></i>
                  <i onClick={()=>handleDelete(item._id)} className="fas fa-trash text-danger mx-2"></i>
                </div>
              </Card.Body>
            </Card>
          ))
        : <p>No projects to display</p>}
    </div>
  );
}

export default View;
