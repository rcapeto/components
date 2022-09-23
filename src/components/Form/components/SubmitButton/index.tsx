import { ButtonHTMLAttributes } from 'react';
import { useForm } from '../../context';

import styles from './styles.module.scss';

export interface FormSubmitButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
   btnText?: string;
};

export function SubmitButton({ btnText = 'Enviar', ...rest }: FormSubmitButtonProps) {
   const { loading, hasError } = useForm();

   return(
      <div className={styles.submitBtnContainer}>
         <button
            {...rest}
            disabled={hasError}
            type="submit"
         >
            { loading ? <div className={styles.loader}/> : btnText }
         </button>
      </div>
   );
}