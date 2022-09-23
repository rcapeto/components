import { InputHTMLAttributes, useState, useMemo, ChangeEvent, useCallback, useEffect } from 'react';
import { useForm } from '../../context';

import { Field, MaskInput } from '../../masks';
import styles from './styles.module.scss';


type InputHTMLProps = InputHTMLAttributes<HTMLInputElement>;
type OwnMask = (value: string) => string;

export interface FormInputProps extends InputHTMLProps {
   validation?: (value: string) => boolean;
   inlineValidation?: boolean;
   onChangeText?: (value: string) => void;
   mask?: Field |OwnMask;
   onValidationError?: (message: string) => void;
   errorMessage?: string;
   label: string;
   inputName: string;
};

export function Input(props: FormInputProps) {
   const [value, setValue] = useState<string>('');
   const [error, setError] = useState<boolean>(false);

   const { addFields, updateFieldValue, updateErrorValue } = useForm();

   const { 
      validation,
      inlineValidation,
      onChangeText,
      mask,
      onValidationError,
      errorMessage = 'Invalid Field',
      label,
      inputName,
      ...rest
   } = props;

   function handleChangeText(event: ChangeEvent<HTMLInputElement>) {
      const value = event.target.value;
      const formatedValue = mask ? 
         (
            typeof mask === 'string' ? MaskInput(mask, value) : mask(value)
         ) 
         : value
      ;

      setValue(formatedValue);
      onChangeText && onChangeText(formatedValue);
      updateFieldValue(inputName, formatedValue);

      if(inlineValidation && validation) {
         handleCheckError(formatedValue);
      }
   }  

   const handleCheckError = useCallback((value: string) => {
      if(validation) {
         const isValid = validation(value);
         const hasError = value ? !isValid : false;

         updateErrorValue(hasError);
         setError(hasError);
         hasError && onValidationError && onValidationError(errorMessage);
      }
   }, [validation, onValidationError, errorMessage, updateErrorValue]);

   const INPUT_CLASS_NAME = useMemo<string | undefined>(() => {
      return `${styles.inputContainer} ${props.className} ${error ? styles.error : ''}`;
   }, [props.className, error]);


   useEffect(() => {
      addFields(inputName);
   }, [inputName, addFields]);

   return(
      <div className={INPUT_CLASS_NAME} has-error={`${error}`}>
         <div className={styles.label}>
            <label htmlFor={inputName}>
               {label}
            </label>
         </div>

         <div className={styles.input}>
            <input 
               type="text" 
               {...rest}
               onChange={handleChangeText}
               value={value}
               id={inputName}
               name={inputName}
            />
         </div>

         {
            error && (
               <div className={styles.errorContainer}>
                  <p className={styles.errorMessage}>
                     { errorMessage }
                  </p>
               </div>
            )
         }

      </div>
   );
}