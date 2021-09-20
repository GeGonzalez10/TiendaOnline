import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';


import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//Components
import Navbar from './pages/components/navbar';
import Products from './pages/components/products';
import Sidebar from './pages/components/sidebar';
import UserBar from './pages/components/userbar';
import Register from './pages/register/register';
import Login from './pages/login/login';
import Adviser from './pages/adviserForm/adviser';

import Home from './pages/home/home';

import Logout from './pages/components/logout';
//Api

import './index.css';

//Styled Components
import styled from 'styled-components';
import { GridContainer } from './pages/styled/styled.components';

const MainApp = styled(GridContainer)`
grid-template-columns: 1fr;
grid-template-rows: auto 1fr auto;
grid-template-areas: 
'navbar'
'main'
'footer';
height:100%;
`

function App() {

  return (
    <Router>
      <MainApp>
	<Switch>
	  {/* TODO here goes navbar*/}
	  <Route path="/">
	    <Navbar />
	  </Route>
	</Switch>
 

	<Switch>
	  <div>
	  	<div>
			<Sidebar />
		</div>
	      <Redirect to="/Home"/>
	    <Route exact path="/Home" component={Home}/>
	    {/* Here goes register*/}
	    <Route exact path="/Register" component={Register}/>
	    {/* Here goes login*/}
	    <Route exact path="/Login" component={Login}/>
	    <Route exact path="/Dashboard" component={Adviser}/>
	    <Route exact path="/Logout" component={Logout}/>
		{/* Here goes products*/}
		<Route exact path="/Products" component={Products}/>
	  </div>
	</Switch>

	<Switch>
	  <Route path="/">
	    {/* TODO here goes footer*/}

	  </Route>
	</Switch>
      </MainApp>
      {/*ToastContainer*/}
      <div>
	<ToastContainer />
      </div>
    </Router>
  );
}

export default App;
