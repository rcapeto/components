import { MouseEvent } from 'react';

import { useForm } from '../../context/FormContext';

import styles from './styles.module.scss';

export interface FormButtonProps {
   buttonText?: string;
   onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
   size?: 'sm' | 'md' | 'lg';
   className?: string;
};

export function Button({ 
   buttonText = 'Click here', 
   onClick, 
   size = 'md',
   className = '', 
}: FormButtonProps) {
   const context = useForm();

   if(!context.controlChildrens) {
      console.error("The component Form.Button must be inside the Form.Wrapper")
      return null;
   }

   return(
      <div className={styles.buttonContainer}>
         <button
            type="submit"
            onClick={onClick}
            className={`${styles[size]} ${className}`}
         >
            { context.loading ? <div className={styles.loading}/> : buttonText }
         </button>
      </div>
   );
}