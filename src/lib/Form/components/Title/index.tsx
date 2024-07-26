import { ReactNode } from 'react';
import { useForm } from '../../context/FormContext';

import styles from './styles.module.scss';

interface TitleProps {
   children: ReactNode;
}

export function Title({ children }: TitleProps) {
   const context = useForm();

   if(!context.controlChildrens) {
      console.error("The component Form.Title must be inside the Form.Wrapper")
      return null;
   }

   return(
      <h5 className={styles.titleContainer}>
         { children }
      </h5>
   );
}