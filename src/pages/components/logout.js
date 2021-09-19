import { useEffect } from 'react';
import { withRouter } from 'react-router-dom';

const Logout = ({ history })=>{

  useEffect(()=>{
    localStorage.clear();
    history.push("/");
  },[])

  return (
    <div></div>
  )
}

export default withRouter(Logout);
