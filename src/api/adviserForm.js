import { post, get } from '../api';

export const newAplication = async (d)=>{
  try{
    const q = await post(`adviser/aplication/new`,d);
    return q.data;
  }catch(e){
    console.log(e.message);
  }
}

export const applied = async (d)=>{
  try{
    const q = await get(`adviser/aplication`);
    return q.data;
  }catch(e){
    console.log(e.message);
  }
}
