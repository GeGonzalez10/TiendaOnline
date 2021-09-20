import styled from 'styled-components';
import { FlexContainer, H2, H3, H5, H6, Img, PrimaryButton} from '../styled/styled.components';
import { ShoppingCartOutlined, FavoriteBorder} from '@material-ui/icons';
import { withRouter } from 'react-router-dom';


import {Colors} from '../styled/styled.config';
let { background} = Colors;

const LoginContainer = styled(FlexContainer)`
background:linear-gradient(180deg,  white 0%, white 15%, ${background[2]} 15%, ${background[2]} 100%);
width: 100%;
height: 25vh;
justify-content:space-between;
align-items:center;
padding:10px;
`
const ProductResponsive = styled(FlexContainer)`
flex-direction:column;
background-color: transparent;

row-gap:10px;
`

const Home = ()=>{

        const topPs = [{
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
                title:"Producto 8",
                mainImage:"https://socialgeek.co/wp-content/uploads/2019/08/hbo-go.jpg",
                onSale:false,
                price:1500,
                offerPrice:1000,
                category:"streaming",
                _id:"8",
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
          }];

  return (
    <FlexContainer justifyContent="inherit" backgroundColor="#FFFF">
        <LoginContainer>
            <H2 {...{
            color:"#FFFFFF"
            }}>Los productos más buscados estan aqui</H2>
            <H2 {...{
            color:"#FFFFFF"
            }}>Registrate para una experiencia <br/> más completa</H2>
        </LoginContainer>
        <FlexContainer justifyContent="flex-start">
            <H3 {...{ margin:"8px"}}> Productos destacados</H3>
        </FlexContainer>
        <FlexContainer
        padding="15px"
        columnGap="35px"
        rowGap="20px"
        justifyContent="center"
        gridColumn="1/-1">
        {topPs.map(item=>{
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

    </FlexContainer>

  )
}

export default withRouter(Home);
