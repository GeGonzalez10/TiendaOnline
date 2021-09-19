import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { FormStyled, FormContainer, FlexContainer, PrimaryButton , H3} from '../styled/styled.components';

import FormGroup from './formgroup';

const Form = ({ input, submit, styles, grid, title, stepInputs})=>{

  const { register, watch, handleSubmit, formState:{ errors }} = useForm();

  const steps = (input.length / stepInputs).toFixed(0);
  const [currentStep,setCurrentStep] = useState(0);

  const finalStep = currentStep === steps - 1;

  const nextStep = ()=>setCurrentStep(currentStep+1);
  const prevStep = ()=>setCurrentStep(currentStep-1);

  const f = (data)=>{
    if(finalStep){
      submit(data);
      return;
    }

    nextStep();
  }

  return (
    <FormStyled {...{
      onSubmit:handleSubmit(f),
      ...styles
    }}>

      <FormContainer>

	<H3>{title}</H3> 

	{[...Array(stepInputs)].map((item,i)=>{

	  const p = (i + (currentStep * stepInputs)).toFixed(0);

	  if(!input[p]){
	    return "";
	  }
	  let { label, placeholder, reg, id, type, options} = input[p];

	  return (
	    <FormGroup {...{
	      watch,
	      errors,
	      label,
	      placeholder,
	      register:register(id,reg),
	      id,
	      key:id,
	      type,
	      options
	    }}/>)
	})}

	<FlexContainer {...{
	  flexDirection:"row",
	  width:"100%",
	  columnGap:"10px"
	}}>

	  {currentStep !== 0 &&
	  <PrimaryButton {...{
	    type:"button",
	    onClick:prevStep,
	    flexGrow:1
	  }}>Anterior</PrimaryButton>}

	  <PrimaryButton {...{
	    type:"submit",
	    flexGrow:1
	  }}>{finalStep ? "Enviar" : "Siguiente"}</PrimaryButton>

	</FlexContainer>

      </FormContainer>

    </FormStyled>
  )
}

export default Form;
