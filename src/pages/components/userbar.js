import React from 'react';

import { withRouter } from 'react-router-dom';

//Icons
import { ArrowBackIos, Notifications, ExpandMore, Menu } from '@material-ui/icons'; 


//Styled components
import {Nav, H4, H5, FlexContainer, Img} from '../styled/styled.components';

//Components
import Link from './link';

const UserBar = ()=>{

  const user = {
    name:"Name",
    price:30.00,
    offerPrice:15.50,
    userImage: '../images/userLogo.png'
  };

  return (
    <Nav>
        <FlexContainer {...{
        justifyContent:"flex-start",
        columnGap:"10px",
        alignItems:"center"
        }}>
            <Link {...{ to:"/" }}>
              <H5 {...{ fontWeight:"700"}}>
                Mercado Digital
              </H5>
            </Link>
            
            <FlexContainer {...{
            alignItems:"center",  
            columnGap:"5px"}}>
                <Menu/>
                <ArrowBackIos fontSize="small"/>
            </FlexContainer>
        </FlexContainer>

        <FlexContainer {...{ 
        alignItems:"center",
        columnGap:"18px"}}>

            <FlexContainer {...{ 
            justifyContent:"space-between", 
            flexDirection:"row",
            columnGap:"5px"}}>
                <Notifications/>
                <ExpandMore/>
            </FlexContainer>

            <H4 {...{ fontWeight:"700", color: "#C4C4C4"}}> 
                {user.name}
            </H4>

            <FlexContainer {...{ flexDirection:"column"}}>
                <H4>USD {user.price}</H4>
                <H4>USD {user.offerPrice}</H4>
            </FlexContainer>
            <Img src={user.userImage}/>    
        </FlexContainer>
    </Nav>

  )
}

export default withRouter(UserBar);