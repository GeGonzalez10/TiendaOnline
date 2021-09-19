import styled from 'styled-components';

import logo from '../images/lettersisotipo.png';
import iconRegister from '../images/iconRegister.png';
import iconLogin from '../images/loginIcon.png';
import userLogo from '../images/userLogo.png';

export const Img = styled.img`
width:${p=>p.width};
height:${p=>p.height};
padding:${p=>p.padding};
max-width:${p=>p.maxWidth || "100%"};
box-shadow:${p=>p.boxShadow};
border-radius: ${p=>p.borderRadius};
margin-bottom:${p=>p.marginBottom};
object-fit:${p=>p.objectFit};
`

export const Logo = styled(Img).attrs({
  src:logo
})`
width:${p=>p.width || "80px"};
height:${p=>p.height || "80px"};
`

export const IconRegister = styled(Img).attrs({
  src:iconRegister
})`
`
export const IconLogin = styled(Img).attrs({
  src:iconLogin
})`
`
export const UserLogo = styled(Img).attrs({
  src:userLogo
})`
`