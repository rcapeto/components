import { ChangeEvent, InputHTMLAttributes, useState, useCallback } from "react";

import styles from './styles.module.scss';
import { omit } from '../../../utils/omit';

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
   inlineValidation?: boolean;
   validation?: (value: string) => boolean;
   mask?: (value: string) => string;
   errorMessage?: string;
   onChangeText?: (value: string) => void;
   onErrorValidation?: (error: boolean, errorMessage: string) => void;
};

export function Input({
   errorMessage = 'Invalid field!',
   validation,
   mask,
   inlineValidation,
   onChangeText,
   onErrorValidation,
   ...inputProps
}: InputProps) {
   const [text, setText] = useState<string>('');
   const [error, setError] = useState<boolean>(false);

   function handleChangeText(event: ChangeEvent<HTMLInputElement>) {
      const inputValue = event.target.value;
      const inputWithMask = mask ? mask(inputValue) : inputValue;

      inlineValidation && checkError(inputWithMask);
      onChangeText && onChangeText(inputWithMask);
      setText(inputWithMask);
   }

   const checkError = useCallback((value?: string) => {
      const realValue = value ?? text;

      if(realValue.length) {
         const hasError = validation ? !validation(realValue ?? text) : false;
         setError(hasError);
         onErrorValidation && onErrorValidation(hasError, errorMessage);
      } else {
         setError(false);
         onErrorValidation && onErrorValidation(false, '');
      }

   }, [text, validation, onErrorValidation, errorMessage]);

   return(
      <div className={styles.inputWrapper}>
         <div className={styles.inputContainer}>
            <input 
               value={text}
               onChange={handleChangeText}
               onBlur={blurEvent => {
                  checkError();
                  inputProps.onBlur && inputProps.onBlur(blurEvent);
               }}
               {...omit(inputProps, ['className', 'value'])}
               data-input-has-error={error}
               data-input-error-message={error ? errorMessage : 'no-error'}
            />
         </div>
         <div className={`${styles.inputErrorContainer} ${error ? styles.hasError : ''}`}>
            <p>{errorMessage ?? 'Campo inválido'}</p>
         </div>
      </div>
      
   );
};