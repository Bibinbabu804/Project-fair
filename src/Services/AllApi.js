import { serverUrl } from "./serverUrl";
import { commonAPI } from "./commonAPI";



//register api call => po
export const registerAPI = async (user) => {
  return await commonAPI("post", `${serverUrl}/api/register`, user, "");
};


export const loginAPI = async (user) => {
  return await commonAPI("post", `${serverUrl}/api/login`, user, "");
};


 
export const addProjectAPI = async (project,reqHeader) => {
  return await commonAPI("post", `${serverUrl}/api/addproject`, project,reqHeader);
};


export const getAllProjectsAPI= async(searchKey,reqHeader)=>{
  return await commonAPI("get", `${serverUrl}/api/getAllProjects?search=${searchKey}`,"",reqHeader);
} 


export const getUserProjectsAPI= async(reqHeader)=>{
  return await commonAPI("get", `${serverUrl}/api/getUserProjects`,"",reqHeader);
} 


export const getHomeProjectsAPI= async(reqHeader)=>{
  return await commonAPI("get",`${serverUrl}/api/HomeProjects`,"",reqHeader);
} 

export const editProjectAPI = async (id,project,reqHeader) => {
  return await commonAPI("put", `${serverUrl}/api/update/${id}`, project,reqHeader);
};


export const deleteProjectAPI = async (id,reqHeader) => {
  return await commonAPI("delete", `${serverUrl}/api/delete/${id}`,'',reqHeader);
};