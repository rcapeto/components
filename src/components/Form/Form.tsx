import { CSSProperties, FormEvent, ReactNode } from 'react';

import { FormInputProps } from './components/Input';
import { RenderInputs } from './components/RenderInputs';
import { useForm } from './context';

type HandleSubmitForm = (fields: Record<string, string>, event?: FormEvent<HTMLFormElement>) => void;

export interface FormProps {
   children?: ReactNode;
   inputs?: FormInputProps[];
   handleSubmitForm?: HandleSubmitForm;
   className?: string;
   style?: CSSProperties;
};

function Form(props: FormProps) {
   const { toggleLoading, fields } = useForm();
   const { children, inputs, handleSubmitForm, ...rest } = props;

   async function handleSubmit(event: FormEvent<HTMLFormElement>) {
      event.preventDefault();

      toggleLoading();

      try {
         handleSubmitForm && await handleSubmitForm(fields, event);
      } catch(err) {
         console.log('error form', err);
      } finally {
         toggleLoading();
      }
   }

   return(
      <form onSubmit={handleSubmit} {...rest}>
         { inputs && <RenderInputs inputs={inputs} /> }
         { children }
      </form>
   );
}

export default Form;