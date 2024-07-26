import { FormHTMLAttributes, ReactNode } from 'react';
import { omit } from '../../../../utils/omit';
import { useForm, CBSubmitFNC } from '../../context/FormContext';

import styles from './styles.module.scss';

export interface ContainerProps extends Omit<FormHTMLAttributes<HTMLFormElement>, 'onSubmit'> {
   children: ReactNode;
   onHandleSubmit?: CBSubmitFNC;
}

export function Container({ children, onHandleSubmit, ...props}: ContainerProps) {
   const { handleSubmit } = useForm();

   return(
      <form 
         {...omit(props, ['className'])} 
         className={styles.formContainer}
         onSubmit={event => handleSubmit(event, onHandleSubmit)}
      >
         { children }
      </form>
   );
}