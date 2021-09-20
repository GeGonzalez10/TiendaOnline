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
    title:"Producto 1",
    mainImage:"https://cloudfront-us-east-1.images.arcpublishing.com/eluniverso/G2BIQD4YTJBLJH7OB5COFZRWVA.jpg",
    onSale:true,
    price:30,
    offerPrice:15,
    category:"servicios",
    _id:"1",
  },
    {
      title:"Producto 2",
      mainImage:"https://www.scdn.co/i/_global/open-graph-default.png",
      onSale:false,
      price:50,
      offerPrice:5,
      category:"streaming",
      _id:"2",
    },
    {
      title:"Producto 3",
      mainImage:"https://heavy.com/wp-content/uploads/2019/03/hulu-logo.jpg?quality=65&strip=all&w=780",
      onSale:true,
      price:12000,
      offerPrice:1000,
      category:"streaming",
      _id:"3",
    },
	{
		title:"Producto 4",
		mainImage:"https://th.bing.com/th/id/OIP.wXqwdGxYheH7X8b5W_DARwHaEK?pid=ImgDet&rs=1",
		onSale:true,
		price:12000,
		offerPrice:1000,
		category:"streaming",
		_id:"4",
	  },
	  {
		title:"Producto 5",
		mainImage:"https://www.muycomputer.com/wp-content/uploads/2021/07/Prime-video.png",
		onSale:false,
		price:1000,
		offerPrice:1000,
		category:"streaming",
		_id:"5",
	  },
	  {
		title:"Producto 6",
		mainImage:"https://www.marketing-branding.com/wp-content/uploads/2019/11/Youtube-Premium-Todos-los-Beneficios.jpg",
		onSale:false,
		price:800,
		offerPrice:400,
		category:"streaming",
		_id:"6",
	  },
	  {	title:"Producto 7",
		mainImage:"https://th.bing.com/th/id/R.d3af7d3ac568b0890b42370d2be192c8?rik=%2bmzH846ERmN0kg&pid=ImgRaw&r=0",
		onSale:true,
		price:700,
		offerPrice:500,
		category:"streaming",
		_id:"7",
	  },
	  {
		title:"Producto 8",
		mainImage:"https://socialgeek.co/wp-content/uploads/2019/08/hbo-go.jpg",
		onSale:false,
		price:1500,
		offerPrice:1000,
		category:"streaming",
		_id:"8",
	  },
	  {
		title:"Producto 9",
		mainImage:"https://pbs.twimg.com/profile_images/1062743748713635841/ilmYfbFB_400x400.jpg",
		onSale:true,
		price:600,
		offerPrice:500,
		category:"streaming",
		_id:"9",
	  },
	  {	title:"Producto 10",
		mainImage:"https://lh3.googleusercontent.com/proxy/zpz2IsnX4wRlrVF8ASUYw3D5y2wlOkcz1DZYwDjvjCY0S1JQeMH_kGXfsZnToWhyCpeXtqRnnz8XQKuCV2k8PzBByJZ54Br2AdjBu9ToC-qJ8LTyycH4cKs",
		onSale:false,
		price:500,
		offerPrice:500,
		category:"streaming",
		_id:"10",
	  },
	  {
		title:"Producto 11",
		mainImage:"https://www.apple.com/v/apple-tv-plus/t/images/meta/og__bgttn9piew1u.png?202108191547",
		onSale:true,
		price:1500,
		offerPrice:1200,
		category:"streaming",
		_id:"11",
	  },
	  {
		title:"Producto 12",
		mainImage:"https://ohmygeek.net/wp-content/uploads/2021/01/Discovery-Plus.jpg",
		onSale:true,
		price:600,
		offerPrice:500,
		category:"streaming",
		_id:"12",
	  },
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
