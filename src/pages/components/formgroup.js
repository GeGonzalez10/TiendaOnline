//Icons
import { ExpandMore } from '@material-ui/icons';
// Styled Components
import { FormGroupContainer, Input, H6, Select, FlexContainer} from '../styled/styled.components';
import { Colors } from '../styled/styled.config';

const FormGroup = ({styles,stylesInput, stylesError,label,register, errors, watch, placeholder, id, type, options})=>{

  return (
    <FormGroupContainer {...styles}>
      <label htmlFor={id}>{label}</label>
      {type === "select" ?
	<FlexContainer {...{
	  key:id
	}}>
	  <FlexContainer {...{
	    width:"100%",
	    position:"relative",
	  }}>
	    <Select {...{
	      ...register,
	      error:errors[id]
	    }}>
	      <option {...{
		value:""
	      }}>Seleccione</option>
	      {options.map((item,i)=>{

		const { value, label } = item;

		return (
		  <option {...{
		    value
		  }}>{label}</option>
		)

	      })}
	    </Select> 
	    <FlexContainer {...{
	      position:"absolute",
	      top:"50%",
	      right:"16px",
	      transform:"translateY(-50%)",
	      fontSize:"14px"
	    }}>
	      <ExpandMore {...{
		fontSize:"inherit",
	      }}/>
	    </FlexContainer>
	  </FlexContainer>
	</FlexContainer>
	:
	<Input {...register} {...{
	  type:type || "text",
	  id,
	  placeholder,
	  error:errors[id]}} {...stylesInput}/>}
      {errors[id] &&
	<H6 {...{
	  textTransform:"uppercase",
	  color:Colors.error,
	  fontWeight:"800",
	}} {...stylesError}>{errors[id].message}</H6>}
    </FormGroupContainer>
  )
}

export default FormGroup; 
