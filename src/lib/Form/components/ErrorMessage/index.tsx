import { useForm } from '../../context/FormContext';

import styles from './styles.module.scss';

interface FormErrorMessage {
   message?: string;
}

export function ErrorMessage({ message = 'Has an error in form' }: FormErrorMessage) {
   const context = useForm();

   if(!context.controlChildrens) {
      console.error("The component Form.ErrorMessage must be inside the Form.Wrapper")
      return null;
   }

   if(!context.hasError) return null;
   
   return(
      <div className={styles.errorContainer}>
         <p>{message}</p>
      </div>
   );
}