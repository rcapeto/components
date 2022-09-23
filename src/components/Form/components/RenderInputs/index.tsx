import { FormInputProps, Input } from '../Input';

import styles from './styles.module.scss';

export interface FormRenderInputsProps {
   inputs: FormInputProps[];
};

export function RenderInputs({ inputs }: FormRenderInputsProps) {
   return(
      <div className={styles.renderContainer}>
         {
            inputs.map((input, index) => (
               <Input {...input} key={String(index)} />
            ))
         }
      </div>
   );
};