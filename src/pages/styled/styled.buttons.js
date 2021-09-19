import styled from 'styled-components';
import { Colors, Fonts} from './styled.config';

let { primary, tertiary, background} = Colors;
let { Raleway } = Fonts;

const Button = styled.button`
display:flex;
color:${p=>p.color || "black"};
grid-column:${p=>p.gridColumn};
background-color:${p=> p.backgroundColor};
padding:${p=> p.padding || "8px 32px"};
border:${p=>p.border || `2px solid transparent`};
border-radius:${p=>p.borderRadius || "8px"};
font-weight:${p=>p.fontWeight || "700"};
font-family:${Raleway};
font-size:${p=>p.fontSize || "16px"};
flex-grow:${p=>p.flexGrow};
transition:${p=>p.transition || "300ms all"};
justify-content:${p=>p.justifyContent || "center"};
align-items:${p=>p.alignItems || "center"};
&:hover {
  background-color:transparent;
  color:grey;
  border:2px solid black;
  cursor: pointer;
}
  &:disabled{
    opacity:0.7;
  }
`

export const PrimaryButton = styled(Button)`
color:${p=>p.color || "white"};
background-color:${p=>p.backgroundColor || primary};
width:${p => p.width};
&:hover{
  border-color:${primary};
  color:${primary};
}
`

export const PrimaryButtonInverted = styled(Button)`
color:${p=>p.color || primary};
background-color:${p=>p.backgroundColor || "white"};
border-color:${p=>p.borderColor || primary};
width:${p => p.width};
&:hover{
  background-color:${primary};
  color:white;
}
`

export const SecondaryButton = styled(Button)`
color:white;
background-color:${p=>p.backgroundColor || tertiary};
&:hover {
  color:${ tertiary};
  border-color:${tertiary};
}
`
export const ExtraButton = styled(Button)`
color:white;
background-color:${p=>p.backgroundColor || background[1]};
&:hover {
  color:${background[1]};
  border-color:${background[1]};
}
`
