import { ChangeEvent, InputHTMLAttributes, useState, useCallback, useRef } from "react";

import styles from './styles.module.scss';
import { omit } from '../../../utils/omit';
import useDidMount from "../../../hooks/useDidMount";
import { FormInputContext } from "../../../lib/Form/context/FormContext";

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

   const inputRef = useRef<HTMLInputElement>(null);

   function handleChangeText(event: ChangeEvent<HTMLInputElement>) {
      const inputValue = event.target.value;
      const inputWithMask = mask ? mask(inputValue) : inputValue;

      inlineValidation && checkError(inputWithMask);
      onChangeText && onChangeText(inputWithMask);
      setText(inputWithMask);
   }

   const checkError = useCallback((value?: string) => {
      const realValue = value ?? text;
      const required = Boolean(inputProps.required);

      if(realValue.length) {
         const hasError = validation ? !validation(realValue ?? text) : false;
         setError(hasError);
         onErrorValidation && onErrorValidation(hasError, errorMessage);
      } else {
         setError(required);
         onErrorValidation && onErrorValidation(required, required ? 'Empty Field' : '');
      }
   }, [text, validation, onErrorValidation, errorMessage, inputProps.required]);


   function handleListenEvent() {
      window.addEventListener("@FormLib.Submit", (event: CustomEventInit<{ inputs:FormInputContext[] }>) => {
         const inputs = event?.detail?.inputs;
         const element = inputRef.current;

         if(element) {
            const name = element.getAttribute("data-lib-form");
            const inputEvent = inputs?.find((input) => input.name === name);
            
            if(inputEvent) {
               checkError(inputEvent.value);
               setText(inputEvent.value);
            }
         }
      });
   }

   useDidMount(() => {
      handleListenEvent();
   });

   return(
      <div className={styles.inputWrapper}>
         <div className={styles.inputContainer}>
            <input 
               value={text}
               ref={inputRef}
               onChange={handleChangeText}
               onBlur={blurEvent => {
                  checkError();
                  inputProps.onBlur && inputProps.onBlur(blurEvent);
               }}
               {...omit(inputProps, ['className', 'value', 'required'])}
               data-input-has-error={error}
               data-input-error-message={error ? errorMessage : 'no-error'}
            />
         </div>
         <div className={`${styles.inputErrorContainer} ${error ? styles.hasError : ''}`}>
            <p>{errorMessage}</p>
         </div>
      </div>
      
   );
};