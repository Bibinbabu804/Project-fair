import axios from 'axios'

//api fetching congiguration=> get,put post,delete etc....
export const commonAPI = async(httpMethod,url,reqBody,reqHeader)=>{
//add register => method post , url=> localhost:300/data  , data=> ..username,enail , password url
let  reqConfig = {

method:httpMethod,
url,
data:reqBody,
headers:reqHeader?reqHeader:{
    'Content-Type':'application/json'
}


}

return await axios(reqConfig).then((response)=>{


    return response
})
.catch((error)=>{
    return error
})


}


