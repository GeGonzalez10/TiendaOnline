import React, {useState} from 'react';
//Icons
import { Close, ArrowBackIos } from '@material-ui/icons'; 

//StyledComponents
import { FlexContainer, H3, SidebarCont, Ul, Li, MenuIcon} from '../styled/styled.components';

//Components
import Link from './link';
import {SidebarData} from './sidebardata.js';

const MenuButton = ({sidebar, setSidebar})=>{

  const handleOpened = ()=>setSidebar(!sidebar);

  return (
    <MenuIcon>
      {sidebar ? 
	<Close {...{
	  onClick:handleOpened,
	  as:sidebar ? Close : ArrowBackIos
	}}/> : 
	  <ArrowBackIos {...{
	    onClick:handleOpened,
	    as:sidebar ? Close : ArrowBackIos
	  }}/>}
    </MenuIcon>
  )
}

const Sidebar = () => {
    const [sidebar, setSidebar] =  useState(false);
    const showSidebar = ()  => setSidebar(!sidebar);

    return (
        <FlexContainer {...{
	        position:"absolute"}}>
            <SidebarCont {...{
	        left:sidebar}}> 
                <Ul onClick={showSidebar}> 
                    <Li {...{ padding:"10px 0 0 130px"}} > 
                        <Link to='#'> 
                            <MenuButton {...{sidebar,setSidebar}}/>
                        </Link> 
                    </Li> 
                    {SidebarData.map((item, index) => { 
                    return ( 
                        <Li key={index} className={item.cName}> 
                            <Link to={item.path}> 
                                <H3>{item.icon} {item.title}</H3> 
                            </Link> 
                        </Li> 
                    ); 
                    })} 
                </Ul> 
            </SidebarCont>
        </FlexContainer>
    )
}

export default Sidebar