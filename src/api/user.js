import { post } from '../api';

export const login = async (d)=>{
  try{
    const q = await post(`user/login`,d); 
    return q.data;
  }catch(e){
    console.log(e.message);
  }
}

export const reg = async (d)=>{
  try{
    const q = await post(`user/register`,d);
    return q.data;
  }catch(e){
    console.log(e.message);
  }
}
