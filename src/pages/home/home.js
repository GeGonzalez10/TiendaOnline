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
                title:"Producto 5",
                mainImage:"https://socialgeek.co/wp-content/uploads/2019/08/hbo-go.jpg",
                onSale:false,
                price:1500,
                offerPrice:1000,
                category:"streaming",
                _id:"8",
              },
            {	title:"Producto 6",
            mainImage:"data:image/png;base64,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",
            onSale:false,
            price:500,
            offerPrice:500,
            category:"streaming",
            _id:"10",
          },
          {
            title:"Producto 7",
            mainImage:"https://www.apple.com/v/apple-tv-plus/t/images/meta/og__bgttn9piew1u.png?202108191547",
            onSale:true,
            price:1500,
            offerPrice:1200,
            category:"streaming",
            _id:"11",
          },
          {
            title:"Producto 8",
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
