import { TextInput, InputProps } from '../../../../components/TextInput';
import { omit } from '../../../../utils/omit';
import { useForm } from '../../context/FormContext';

interface FormInputProps extends InputProps{
   inputName: string;
}

export const InputWrapper = TextInput.Wrapper;
export const InputIcon = TextInput.Icon;

export const Input = (props: FormInputProps) => {
   const { inputName, ...inputProps } = props;
   const context = useForm();

   if(!context.controlChildrens) {
      console.error("The component Form.Input must be inside the Form.Wrapper")
      return null;
   }
   
   return(
      <TextInput.Input
         {...omit(inputProps, ['id', 'name'])}
         id={inputName} 
         data-lib-form={inputName}
         name={inputName}
      />
   );
}

export { type FormInputProps };