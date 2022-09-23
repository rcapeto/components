import FormComponent, { FormProps } from './Form';

import { FormInputProps, Input } from './components/Input';
import { SubmitButton, FormSubmitButtonProps } from './components/SubmitButton';

import { EmailCheck } from './validations/email';
import { PhoneCheck } from './validations/phone';

import { FormProvider, useForm } from './context';

function Form(props: FormProps) {
   return(
      <FormProvider>
         <FormComponent {...props}/>
      </FormProvider>
   );
}

Form.Input = Input;
Form.SubmitButton = SubmitButton;

export {
   Form,
   type FormProps,
   type FormInputProps,
   type FormSubmitButtonProps,
   EmailCheck,
   PhoneCheck,
   useForm
};