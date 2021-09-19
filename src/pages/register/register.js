import styled from 'styled-components';
import { FlexContainer, IconContainer, FormStyled, HalfInputContainer, PrimaryButton,IconRegister, H3} from '../styled/styled.components';

import { withRouter } from 'react-router-dom';
import FormGroup from '../components/formgroup';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { regex } from '../utils/utils';

//API
import { reg } from '../../api/user';

import {Colors} from '../styled/styled.config';
let { background, FormTextColor} = Colors;

const RegisterContainer = styled(FlexContainer)`
background:linear-gradient(180deg,  ${background[2]} 0%, ${background[2]} 60%, white 60%, white 100%);
width: 100%;
flex:1;
justify-content:center;
align-items:center;
height:100%;
padding:10px;
`

const Register = ({history})=>{

  const { register, watch, handleSubmit, formState:{ errors }} = useForm();

  const submit = async (f)=>{
    //Register
    const q = await reg(f);
    const { error:{ message }} = q;

    if(q.status !== 601){
      toast.error(message ? message : q.message.translation);
      return;
    }

    toast.success("Verifique su correo electrónico");
    setTimeout(()=>{
      history.push("/");
    },2000);
  }

  if(localStorage.getItem("token")){
    history.push("/dashboard");
  }

  return (
    <RegisterContainer>

      <FormStyled onSubmit={handleSubmit(submit)}>

	<FlexContainer
	  flexDirection="column"
	  justifyContent="center"
	  backgroundColor="white"
	  padding="20px"
	  width="100%"
	  maxWidth="460px"
	  boxShadow="0px 0px 10px rgba(0, 0, 0, 0.25)"
	  borderRadius="8px 8px 0px 0px"
	  borderBottom="5px solid #0050F7"
	  rowGap="10px"
	>
	  <H3 {...{
	    color:FormTextColor
	  }}>Registro</H3>

	  <FormGroup {...{
	    watch,
	    errors,
	    label:"Correo electrónico",
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

	  <HalfInputContainer>

	    <FormGroup {...{
	      watch,
	      errors,
	      label:"Nombre",
	      register:register("firstName",{
		required:"Nombre es requerido"
	      }),
	      id:"firstName"
	    }}/>

	    <FormGroup {...{
	      watch,
	      errors,
	      label:"Apellido",
	      register:register("lastName",{
		required:"Apellido es requerido"
	      }),
	      id:"lastName"
	    }}/>

	  </HalfInputContainer>

	  <HalfInputContainer>

	    <FormGroup {...{
	      stylesError:{
		width:"190px",
	      },
	      watch,
	      errors,
	      type:"password",
	      label:"Contraseña",
	      register:register("pass",{
		required:"Contraseña es requerido",
		minLength:{
		  value:8,
		  message:"Contraseña debe contener al menos 8 caracteres"
		}
	      }),
	      id:"pass"
	    }}/>

	    <FormGroup {...{
	      stylesError:{
		width:"190px"
	      },
	      watch,
	      errors,
	      type:"password",
	      label:"Confirmar Contraseña",
	      register:register("cpass",{
		required:"Confirmar contraseña es requerido",
		validate:value=> value === watch("pass") || "Contraseñas deben coincidir"
	      }),
	      id:"cpass"
	    }}/>

	  </HalfInputContainer>

	  <PrimaryButton {...{
	    width:"100%",
	    margin:"20px 0 0 0"
	  }}>Empezar</PrimaryButton>
	</FlexContainer>

	<IconContainer>
	  <IconRegister {...{
	    maxWidth:"405px",
	    maxHeight:"390px"
	  }}/>
	</IconContainer>

      </FormStyled>

    </RegisterContainer>

  )
}

export default withRouter(Register);
