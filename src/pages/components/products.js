import React from 'react';

import { ShoppingCartOutlined, FavoriteBorder} from '@material-ui/icons';

import styled from 'styled-components';
import { FlexContainer, Img, PrimaryButton, H5,H6} from '../styled/styled.components';


const ProductResponsive = styled(FlexContainer)`
flex-direction:column;
background-color: transparent;

row-gap:10px;
`

const Products = ()=>{

  const ps = [{
    title:"producto1",
    mainImage:"https://cloudfront-us-east-1.images.arcpublishing.com/eluniverso/G2BIQD4YTJBLJH7OB5COFZRWVA.jpg",
    onSale:true,
    price:30,
    offerPrice:15,
    category:"servicios",
    _id:"1",
  },
    {
      title:"producto2",
      mainImage:"https://www.scdn.co/i/_global/open-graph-default.png",
      onSale:false,
      price:50,
      offerPrice:5,
      category:"streaming",
      _id:"2",
    },
    {
      title:"Producto3",
      mainImage:"https://cloudfront-us-east-1.images.arcpublishing.com/eluniverso/G2BIQD4YTJBLJH7OB5COFZRWVA.jpg",
      onSale:true,
      price:12000,
      offerPrice:1000,
      category:"streaming",
      _id:"3",
    }
  ];

  return (
    <FlexContainer
	  padding="15px"
      columnGap="20px"
      rowGap="20px"
      justifyContent="center"
      gridColumn="1/-1">
      {ps.map(item=>{
	return (
		
		
	  <ProductResponsive key={item._id}>

	    <FlexContainer
	      {...{
		boxShadow:"0px 10px 10px rgba(0, 0, 0, 0.25)"
	      }}>

	      <Img {...{
		width:"285px",
		height:"125px",
		borderRadius:"8px 8px 0px 0px",
		objectFit:"cover"
	      }} src={item.mainImage} />
	    </FlexContainer>

	      {/*Father for price and buttons div*/}

	    <FlexContainer {...{
	      backgroundColor:"white",
	      flexDirection:"row",
	      boxShadow:"0px 4px 4px rgba(0,0,0,0.25)",
	      borderRadius:"0px 0px 10px 10px",
	      alignItems:"center",
	      justifyContent:"space-between",
	      padding:"5px"
	    }}>

	      {/*Title and price div*/}

	      <FlexContainer
		{...{
		  flexDirection:"column",
		  rowGap:"5px"
		}}>

	      <H5>{item.title}</H5>

		<FlexContainer
		  {...{
		    flexDirection:"row"
		  }}>

		  <FlexContainer 
		   {...{
		     columnGap:"10px",
		     alignItems:"center"
		    }}>

		    {item.onSale && <H6 {...{
		      textDecoration:"line-through",
		    }}>U$D {new Intl.NumberFormat('en-US').format(item.price)}</H6>}

		    <H6>U$D {new Intl.NumberFormat('en-US').format(item.onSale ? item.offerPrice : item.price)}</H6>

		  </FlexContainer>

		</FlexContainer>

	      </FlexContainer>

	      {/*Buttons div*/}
		  <FlexContainer {...{
		    fontSize:"22px",
		    alignItems:"center",
		    padding:"0 0 0 15px",
		    columnGap:"5px"
		  }}>

		    <FavoriteBorder fontSize="inherit"/>

		    <PrimaryButton {...{
		      fontSize:"inherit",
		      borderRadius:"32px",
		      padding:"8px"}}>

		      <ShoppingCartOutlined {...{
			fontSize:"inherit"
		      }}/>

		    </PrimaryButton>

		  </FlexContainer>

	    </FlexContainer>

	  </ProductResponsive>
	)
      })}

    </FlexContainer>
  )
}

export default Products;
