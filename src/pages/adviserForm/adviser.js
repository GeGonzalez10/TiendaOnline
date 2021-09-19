import { useEffect, useState } from 'react';
import { regex } from '../utils/utils';

import { GridContainer, FlexContainer, H3,H4} from '../styled/styled.components';

import { withRouter } from 'react-router-dom';
import Form from '../components/form';
import { toast } from 'react-toastify';

import { newAplication, applied} from '../../api/adviserForm';

const Adviser = ({history})=>{

  const [userApplied,setUserApplied] = useState(false);

  const i = [
    {
      label:"País",
      placeholder:"Ingrese su pais",
      reg:{
	required:"País es requerido"
      },
      id:"country"
    },
    {
      label:"Edad",
      placeholder:"Ingrese su edad",
      reg:{
	required:"Edad es requerido",
	pattern:{
	  value:regex.number,
	  message:"Edad debe ser un número"
	}
      },
      id:"age"
    },
    {
      label:"Profesíon",
      placeholder:"Ingrese su profesion",
      reg:{
	required:"Profesíon es requerido"
      },
      id:"profession"
    },
    {
      label:"¿A qué te dedicas?",
      placeholder:"",
      reg:{
	required:"Requerido"
      },
      id:"dedicate"
    },
    {
      type:"select",
      label:"¿Tienes experiencia en ventas?",
      placeholder:"",
      reg:{
	required:"Requerido"
      },
      id:"experience",
      options:[
	{
	  value:"yes",
	  label:"Si"
	},
	{
	  value:"no",
	  label:"No"
	}
      ]
    },
    {
      type:"select",
      label:"¿Has trabajado digitalmente?",
      placeholder:"",
      reg:{
	required:"Requerido"
      },
      id:"digitalWork",
      options:[
	{
	  value:"yes",
	  label:"Si"
	},
	{
	  value:"no",
	  label:"No"
	}
      ]
    },
    {
      type:"select",
      label:"¿Tienes laptop o pc?",
      placeholder:"",
      reg:{
	required:"Requerido"
      },
      id:"desktop",
      options:[
	{
	  value:"laptop",
	  label:"Laptop"
	},
	{
	  value:"pc",
	  label:"Pc"
	},
	{
	  value:"both",
	  label:"Ambas" 
	},
	{
	  value:"no",
	  label:"Ninguna"
	}
      ]
    },
    {
      type:"select",
      label:"¿Tienes teléfono inteligente?",
      placeholder:"",
      reg:{
	required:"Requerido"
      },
      id:"smartphone",
      options:[
	{
	  value:"yes",
	  label:"Si"
	},
	{
	  value:"no",
	  label:"No"
	}
      ]
    },
    {
      type:"select",
      label:"¿Tienes experiencia usando redes sociales?",
      placeholder:"",
      reg:{
	required:"Requerido"
      },
      id:"socialMedia",
      options:[
	{
	  value:"yes",
	  label:"Si"
	},
	{
	  value:"no",
	  label:"No"
	}
      ]
    },
    {
      label:"Número de whatsapp",
      placeholder:"",
      reg:{
	required:"Requerido"
      },
      id:"phone"
    },
    {
      label:"Instagram",
      placeholder:"",
      reg:{
	required:"Requerido"
      },
      id:"social.instagram"
    }];


  const submit = async (d)=>{
    let q = await newAplication(d);
    const { error:{ message } } = q;

    if(q.status !== 200){
      toast.error(message ? message : q.message.translation);
      return;
    };

    window.location.reload();
  };

  if(!localStorage.getItem("token")){
    history.push("/login");
  }

  useEffect(()=>{
    const c = async()=>{
      let q = await applied();
      if(q.status === 625){
	setUserApplied(true);
      }
    }
    c();
  },[])

  return (
    <GridContainer {...{
      padding:"16px 0",
    }}>
      {!userApplied ?
	<Form {...{
	  styles:{
	    gridColumn:"1/-1",
	    alignItems:"center"
	  },
	  stylesContainer:{
	    flexDirection:"column",
	  },
	  grid:true,
	  input:i,
	  title:"Aplicación",
	  submit,
	  stepInputs:2
	}}/>
	:
	<FlexContainer {...{
	  justifyContent:"center"
	}}>
	  <FlexContainer {...{
	    flexDirection:"column",
	    rowGap:"20px",
	    backgroundColor:"white",
	    maxWidth:"600px",
	    padding:"32px 16px",
	    boxShadow:"0px 0px 10px rgba(0, 0, 0, 0.25)"
	  }}>
	    <H3 {...{
	      textAlign:"center"
	    }}>Gracias por Aplicar</H3>
	    <H4>Estaremos en contacto contigo para confirmar tu ingreso dentro de nuestro equipo.</H4>
	  </FlexContainer>
	</FlexContainer>
      }
    </GridContainer>
  )
}

export default withRouter(Adviser);
