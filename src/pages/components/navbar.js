import React, { useState, useEffect } from 'react';

import { withRouter } from 'react-router-dom';
//Icons
import { Menu, Close, Search} from '@material-ui/icons';

//Styled components
import {Nav, MenuIcon, MenuLinks, Links, HeadLinks, H4, PrimaryButton, PrimaryButtonInverted, SearchContainer, SearchInput} from '../styled/styled.components';

//Components
import Link from './link';

const noauthLinks = [
  {
    title:"Iniciar Sesión",
    to:"/login",
  },
  {
    title:"Registro",
    to:"/register",
    inverted:true
  },
];

const authLinks = [
  {
    title:"Panel",
    to:"/dashboard"
  },
  {
    title:"Cerrar sesión",
    to:"/logout",
    inverted:true
  }
]

const MenuButton = ({opened,setOpened})=>{

  const handleOpened = ()=>setOpened(!opened);

  return (
    <MenuIcon>
      {opened ? 
	<Close {...{
	  onClick:handleOpened,
	  as:opened ? Close : Menu
	}}/> : 
	  <Menu {...{
	    onClick:handleOpened,
	    as:opened ? Close : Menu
	  }}/>}
    </MenuIcon>
  )
}

const NavBar = ({ history, location})=>{

  const [opened,setOpened] = useState(false);

  const [links,setLinks] = useState([]);

  useEffect(()=>{
    if(localStorage.getItem("token")){
      setLinks(authLinks);
      return;
    }

    setLinks(noauthLinks);
  },[location])

  return (
    <Nav>
      {/*<Logo/>*/}
      <Link {...{
	to:"/"
      }}>
	<H4 {...{
	  fontWeight:"700"
	}}>Tienda Online</H4>
      </Link>
      <MenuButton {...{opened,setOpened}}/>

      <SearchContainer>
	<SearchInput {...{
	  placeholder:"Buscar productos y más..."
	}}/>
	<PrimaryButton  {...{
	  borderRadius:"0px 10px 10px 0px",
	  padding:"8px 16px",
	  fontSize:"20px"
	}}>
	  <Search {...{
	    fontSize:"inherit"
	  }}/>
	</PrimaryButton>
      </SearchContainer>

      <MenuLinks {...{
	left:opened,
	flexDirection:"column"
      }}>

	<HeadLinks>
	  <Link {...{
	    to:"/"
	  }}>
	    <H4 {...{
	      fontWeight:"700"
	    }}>Tienda Online</H4>
	  </Link>
	  <MenuButton {...{opened,setOpened}}/>

	</HeadLinks>

	  <Links>
	    {links.map((item,key)=>{

	      const { to, title, inverted} = item;

	      return (
		<Link {...{
		  to,
		  key
		}}>
		  <PrimaryButton {...{
		    width:"100%",
		    padding:"8px 16px",
		    fontSize:"14px",
		    as:inverted ? PrimaryButtonInverted : ""
		  }}>{title}</PrimaryButton>
		  
		</Link>
	      )
	    })}
	  </Links>
      </MenuLinks>
    </Nav>
  )
}

export default withRouter(NavBar);
