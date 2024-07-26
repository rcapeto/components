import { ReactNode, AllHTMLAttributes } from 'react';
import { omit } from '../../../../utils/omit';
import { useForm } from '../../context/FormContext';

import styles from './styles.module.scss';

interface FieldProps extends AllHTMLAttributes<HTMLDivElement> {
   children: ReactNode;
}

export function Field({ children, ...props }: FieldProps) {
   const context = useForm();

   if(!context.controlChildrens) {
      console.error("The component Form.Field must be inside the Form.Wrapper")
      return null;
   }
   
   return(
      <div className={styles.fieldContainer} {...omit(props, ['className'])}>
         { children }
      </div>
   );
}