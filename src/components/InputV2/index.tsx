import { ChangeEvent, useEffect, useState, useCallback, useMemo } from 'react';
import { BsEyeSlashFill, BsEyeFill } from 'react-icons/bs';

import styles from './Input.styles.module.scss';
import PasswordHelp from './components/PasswordHelp';

interface InputV2Props {
   hasError?: boolean;
   inlineValidation?: boolean;
   validation?: (text: string) => boolean;
   mask?: (text: string) => string;
   errorMessage?: string;
   onSuccess?: (inputName: string, value: string) => void;
   onError?: (inputName: string, error: string) => void;
   onChangeText?: (text: string) => void;
   onHelpPasswordError?: () => void;
   value?: string;
   maxLength?: number;
   placeholder?: string;
   label?: string;
   id?: string;
   isPassword?: boolean;
   showPasswordHelp?: boolean;
   inputName: string;
};

const DEFAULT_ERROR_MESSAGE = 'Por favor preencha o campo corretamente.'; 
const DEFAULT_ERROR_HELP_PASSWORD = 'Para sua segurança por favor cadastre a senha corretamente.';

function InputV2(props: InputV2Props) {
   const [input, setInput] = useState(props.value ?? '');
   const [showPassword, setShowPassword] = useState(false);

   function onChange(event: ChangeEvent<HTMLInputElement>) {
      const value = event.target.value;
      const text = props?.mask?.(value) ?? value;

      if(props.inlineValidation) {
         validateText(text);
      }

      props.onChangeText?.(text);
      setInput(text);
   }

   const validateText = useCallback((text: string) => {
      if(!props.validation) {
         return true;
      }

      const isValid = props.validation(text);

      const messageError = props?.errorMessage ?? DEFAULT_ERROR_MESSAGE;
      const message = isValid ? text : messageError;
      const handler = isValid ? props.onSuccess : props.onError;

      handler?.(props.inputName, message);

      return isValid;
   }, [props]);

   const onBlur = useCallback(() => {
      validateText(input);
   }, [input, validateText]);

   function toggleShowPassword() {
      setShowPassword(prevState => !prevState);
   }

   const onPasswordHelpError = useCallback(() => {
      props?.onError?.(props.inputName, DEFAULT_ERROR_HELP_PASSWORD);
   }, [props]);

   const onPasswordSuccess = useCallback(() => {
      props?.onSuccess?.(props.inputName, input);
   }, [props, input]);

   useEffect(() => {
      setInput(props.value ?? '');
   }, [props.value]);

   const inputContentStyles = useMemo(() => {
      const style = [styles.inputContent];

      if(props.hasError) {
         style.push(styles.hasError);
      }

      return style.join(" ");
   }, [props.hasError]);
   
   return(
      <div className={styles.inputContainer}>
         {
            props.label && (
               <div className={styles.labelContainer}>
                  <label htmlFor={props.id}>
                     {props.label}
                  </label>
               </div>
            )
         }

         <div className={inputContentStyles}>
            <input 
               type={props.isPassword && !showPassword ? 'password' : 'text'} 
               onChange={onChange}
               onBlur={onBlur}
               name={props.inputName}
               id={props.id}
               placeholder={props.placeholder}
               value={input}
            />

            {
               props.isPassword && (
                  <button
                     className={styles.btnShowPassword}
                     type="button"
                     onClick={toggleShowPassword}
                  >
                     {
                        !showPassword ? <BsEyeFill size={18}/> : <BsEyeSlashFill size={18} />
                     }
                  </button>
               )
            }
         </div>

         {
            props.hasError && (
               <div className={styles.inputErrorContainer}>
                  <span>
                     {props.errorMessage ?? DEFAULT_ERROR_MESSAGE}
                  </span>
               </div>
            )
         }

         {
            props.showPasswordHelp && props.isPassword && (
               <div className={styles.helpPassword}>
                  <PasswordHelp 
                     text={input}
                     onError={onPasswordHelpError}
                     onSuccess={onPasswordSuccess}
                  />
               </div>
            )
         }
      </div>
   );
}

export default InputV2;