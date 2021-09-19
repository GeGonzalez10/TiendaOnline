import axios from 'axios'

export const apiURL = process.env.REACT_APP_API_URL

const headers = ()=>{
  return {
    Authorization: 'Bearer ' + localStorage.getItem('token')}
}

export const get = async (uri,fd)=>{ 
  return await axios.get(`${apiURL}/${uri}`,{ headers:headers() }).catch(a=> {return a.response;});
}

export const post = async (uri,fd)=>{
  return await axios({
    method:'post',
    url:`${apiURL}/${uri}`,
    data:fd,
    headers:headers()
  }).catch(a=> {return a.response;});
}

export const del = async (uri,fd)=>{
  return await axios({
    method:"delete",
    url:`${apiURL}/${uri}`,
    data:fd,
    headers:headers()
  }).catch(a=> {return a.response;});
}
