import { ReactNode, LabelHTMLAttributes } from 'react';
import { omit } from '../../../../utils/omit';
import { useForm } from '../../context/FormContext';

import styles from './styles.module.scss';

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
   children: ReactNode;
}

export function Label({ children, ...props }: LabelProps) {
   const context = useForm();

   if(!context.controlChildrens) {
      console.error("The component Form.Label must be inside the Form.Wrapper")
      return null;
   }

   return(
      <label className={styles.labelContainer} {...omit(props, ['className'])}>
         { children }
      </label>
   );
}