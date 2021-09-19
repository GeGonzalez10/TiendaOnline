import styled, { css } from 'styled-components';

const Styles = css`

width:${p=>p.width};
color:${p=>p.color || "black"};
font-weight:${p=>p.fontWeight || "600"};
letter-spacing:0.05em;
text-transform:${p=>p.textTransform};
text-decoration:${p=>p.textDecoration};
text-align:${p=>p.textAlign};
margin:${p=> p.margin};
&::first-letter{
  text-transform:${p=>p.textTransform || "uppercase"};
}
`

export const H1 = styled.h1`
${Styles}
font-size: 36px;
`
export const H2 = styled.h2`
${Styles}
font-size: 24px;
`
export const H3 = styled.h3`
${Styles}
font-size: 18px;
color:${p=> p.color};
`

export const H4 = styled.h4`
${Styles}
font-size: 14px;
`
export const H5 = styled.h5`
${Styles}
font-size: 12px;
`
export const H6 = styled.h6`
${Styles}
font-size: 10px;
`
