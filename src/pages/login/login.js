import styled from 'styled-components';
import { FlexContainer, IconContainer, PrimaryButton, IconLogin,
  H3, FormStyled} from '../styled/styled.components';

import { withRouter } from 'react-router-dom';
import FormGroup from '../components/formgroup';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { regex, token } from '../utils/utils';

//API

import { login } from '../../api/user';

import {Colors} from '../styled/styled.config';

let { background, FormTextColor} = Colors;

const LoginContainer = styled(FlexContainer)`
background:linear-gradient(180deg,  ${background[2]} 0%, ${background[2]} 60%, white 60%, white 100%);
width: 100%;
height: 100vh;
justify-content:center;
align-items:center;
height:100%;
padding:10px;
`
const Login = ({history})=>{
  
  const { register, watch, handleSubmit, formState:{ errors }} = useForm();

  const submit = async (f)=>{
    //Login
    const q = await login(f);
    const { error:{ message }, data} = q;

    if(q.status !== 600){
      toast.error(message ? message : q.message.translation);
      return;
    }

    token.set(data.token);
    history.push("/dashboard");
  }

  if(localStorage.getItem("token")){
    history.push("/dashboard");
  }
  return (
    <LoginContainer>

      <FormStyled onSubmit={handleSubmit(submit)}>

	<FlexContainer
	  flexDirection="column"
	  justifyContent="center"
	  backgroundColor="white"
	  padding="20px"
	  width="100%"
	  maxWidth="310px"
	  boxShadow="0px 0px 10px rgba(0, 0, 0, 0.25)"
	  borderRadius="8px 8px 0px 0px"
	  borderBottom="5px solid #0050F7"
	  rowGap="10px"
	>
	  <H3 {...{
	    color:FormTextColor
	  }}>Iniciar sesión</H3>

	  <FormGroup {...{
	    watch,
	    errors,
	    label:"Correo electrónico",
	    placeholder:"Ingrese su correo electrónico",
	    register:register("email",{
	      required:"Correo electrónico es requerido",
	      pattern:{
		value:regex.email,
		message:"Correo electrónico debe ser valido"
	      }
	    }),
	    id:"email",
	    stylesInput:{
	      maxWidth:"100%"
	    }
	  }}/>

	  <FormGroup {...{
	    watch,
	    errors,
	    label:"Contraseña",
	    placeholder:"Ingrese su contraseña",
	    type:"password",
	    register:register("pass",{
	      required:"Contraseña es requerido",
	      minLength :{
		value:8,
		message:"Contraseña debe contener al menos 8 caracteres."
	      }
	    }),
	    id:"pass",
	    stylesInput:{
	      maxWidth:"100%"
	    }
	  }}/>

	  <PrimaryButton {...{
	    width:"100%",
	    margin:"20px 0 0 0",
	  }}>Iniciar Sesión</PrimaryButton>
	</FlexContainer>


	<IconContainer>
	  <IconLogin {...{
	    maxWidth:"145px",
	    maxHeight:"210px"
	  }}/>
	</IconContainer>

      </FormStyled>
    </LoginContainer>

  )
}

export default withRouter(Login);
