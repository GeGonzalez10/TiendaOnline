import styled from 'styled-components';
import { Colors, Fonts } from './styled.config';


let { primary, error, FormTextColor, background} = Colors;
let { Raleway } = Fonts;

const Div = styled.div`
font-size:${p=>p.fontSize};
width:${p=>p.width};
height:${p=>p.height};
margin:${p=>p.margin};
border-radius:${p=>p.borderRadius};
border-bottom:${p=>p.borderBottom};
box-shadow:${p=>p.boxShadow};
background-color: ${p=>p.backgroundColor};
color:${p=>p.color};
max-width:${p=>p.maxWidth};
max-height:${p=>p.maxHeight};
padding:${p=>p.padding};
column-gap:${p=>p.columnGap};
row-gap:${p=>p.rowGap};
position:${p=>p.position};
top:${p=>p.top};
left:${p=>p.left};
right:${p=>p.right};
bottom:${p=>p.bottom};
transform:${p=>p.transform};
`

export const FlexContainer = styled(Div)`
display:flex;
position:${p=>p.position};
grid-column:${p=>p.gridColumn || "1/-1"};
flex-wrap:${p=>p.flexWrap || "wrap"};
flex-direction:${p=>p.flexDirection};
flex-grow:${p=>p.flexGrow};
justify-content:${p=>p.justifyContent};
align-items:${p=>p.alignItems};
`

export const GridContainer = styled(Div)`
display:grid;
grid-template-columns:${p=> p.gridTemplateColumns || "repeat(12,1fr)"};
`

export const Span = styled.span`
font-size:${p=>p.fontSize || "16px"};
font-family:${p=>p.fontFamily || Raleway};
font-weight:${p=>p.fontWeight || "500"};
white-space:${p=>p.whiteSpace || "wrap"};
text-decoration:${p=>p.textDecoration};
text-transform:${p=>p.textTransform};
color:${p=>p.color || "#000000"};
padding:${p=>p.padding || "5px"};
justify-content:${p=>p.justifyContent};
align-items:${p=>p.alignItems};
&::first-letter {
  text-transform:${p=>p.textTransform || "uppercase"};
}
`

export const MenuIcon = styled(FlexContainer)``

export const HeadLinks = styled(FlexContainer)`
justify-content:space-between;
align-items:center;
`

export const Nav = styled(FlexContainer)`
background:${p=>p.background || "#fff"};
align-items:center;
justify-content:space-between;
padding:16px 32px;
box-shadow: ${p =>p.boxShadow || `0 0 10px rgba(0,0,0,0.5)`};   
position: ${p=>p.position || "relative"};
${MenuIcon}{
  display:none;
}
@media screen and (max-width:868px){
  ${MenuIcon}{
    display:inherit;
  }
}
`

export const Links = styled(FlexContainer)`
flex-direction:row;
gap:5px;
@media screen and (max-width:868px){
  flex-direction:column;
  align-items:center;
  & > a {
    width:100%
  }
}
`

export const MenuLinks = styled(FlexContainer)`
background-color:white;
flex-direction:row;
column-gap:20px;
row-gap:20px;
z-index:11;
${HeadLinks}{
  display:none;
}
@media screen and (max-width:868px){
  box-shadow:0 0 10px rgba(0,0,0,0.5);
  transition:all 300ms;
  flex-direction:column;
  padding:12px 25px;
  position:fixed;
  top:0;
  left:${p=> p.left ? "0" : "-100%"};
  width:100%;
  height:100vh;
${HeadLinks}{
  display:inherit;
}
${Links}{
  margin:auto;
  text-align:center;
}
}
`

export const FormGroupContainer = styled(FlexContainer)`
color:${FormTextColor};
letter-spacing:0.05em;
row-gap:10px;
font-weight:800;
font-size:12px;
flex-direction:column;
flex-grow:${p=>p.flexGrow};
grid-column:span 1;
width:${p=>p.width || "100%"};
`

export const HalfInputContainer = styled(FlexContainer)`
column-gap:20px;
flex-wrap:initial;
& > ${FlexContainer}{
  flex-grow:0;
}
`

export const Input = styled.input`
width: ${p=> p.width || "100%"};
max-width:${p=>p.maxWidth || "600px"};
color: ${p=> p.color || "black" };
background-color: ${p=> p.backgroundColor || "transparent" };
font-size: 14px;
font-weight:500;
letter-spacing:0.05em;
border: 3px solid;
border-color:${p=>{
  return p.error ? error 
      : (p.borderColor || primary)
}};
border-radius: 32px;
padding: ${p => p.padding || "8px 16px"};
outline:none;
&::placeholder{
  color:rgba(0,0,0,0.5);
}
`

export const FormStyled = styled.form`
display:flex;
flex-wrap:wrap;
align-items:${p=>p.alignItems || "flex-end"};
justify-content:${p=>p.justifyContent || "center"};
width:${p=>p.width || "100%"};
flex-direction:${p=>p.flexDirection};
grid-column:${p=>p.gridColumn};
`

export const FormContainer = styled(FlexContainer)`
background-color:${p=>p.backgroundColor || "white"};
padding:${p=>p.padding || "20px"};
box-shadow:${p=>p.boxShadow || "0 0 10px rgba(0,0,0,0.25)"};
border-radius:${p=>p.borderRadius || "8px 8px 0 0"};
border-bottom:${p=>p.borderBottom || `5px solid ${primary}`};
justify-content:${p=>p.justifyContent || "center"};
align-items:${p=>p.alignItems || "flex-start"};
flex-direction:${p=>p.flexDirection || "column"};
gap:${p=>p.gap || "20px"};
width:${p=>p.width || "90%"};
max-width:${p=>p.maxWidth || "350px"};
grid-gap:20px;
`

export const IconContainer = styled(FlexContainer)`
flex-grow:0;
border-bottom:5px solid ${primary};
align-items:flex-end;

@media screen and (max-width:868px){
  &{
    display:none;
  }
}
`

export const Select = styled.select`
width: ${p=> p.width || "100%"};
max-width:${p=>p.maxWidth || "600px"};
color: ${p=> p.color || "black" };
background-color: ${p=> p.backgroundColor || "transparent" };
font-size: 14px;
font-weight:500;
letter-spacing:0.05em;
border: 3px solid;
border-color:${p=>{
  return p.error ? error 
      : (p.borderColor || primary)
}};
padding: ${p => p.padding || "8px 16px"};
outline:none;
position:relative;
appearance:none;
& > option{
  background-color:${background[1]};
  color:white;
}
`

export const SearchContainer= styled(FlexContainer)`
max-width:400px;
width:100%;
padding:0px;
flex-direction:row;
flex-wrap:nowrap;

@media screen and (max-width:868px){
  display:none;
}
`

export const SearchInput = styled(Input)`
border-color:white;
border:0px solid;
color:black; 
border-radius:0;
font-weight:700;
box-shadow:0px 0px 6px rgba(0, 0, 0, 0.24);
padding:12px 20px;
`

export const SidebarCont = styled(FlexContainer)`
left:${p=> p.left ? "0" : "-100%"};
background-color: #FFFFFF;
width: 180px;
flex-direction:column;
align-items:center;
height:${p=> p.height || "100vh"};
box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.24);
`

export const Ul = styled.ul`
list-style:none;
width: 100%;
`
export const Li = styled.li`
padding: ${p => p.padding || "8px"};
align-content: flex-end;
`

