import { useCallback, useState } from "react";
import InputV2 from "..";

import { inputMasks } from "../utils/masks";
import { inputValidation } from "../utils/validation";

export default function Form() {
   const [errors, setErrors] = useState<Record<string, string>>({});
   const [state, setState] = useState({});
   const [passwordError, setPasswordError] = useState(false);

   function onError(inputName: string, errorMessage: string) {
      setErrors(prevState => ({
         ...prevState,
         [inputName]: errorMessage,
      }))
   }
   
   function onSuccess(inputName: string, value: string) {
      console.log("here here success", inputName, value);
      setState(prevState => ({
         ...prevState,
         [inputName]: value,
      }));
      
      setErrors(prevState => {
         delete prevState[inputName];
         return prevState;
      });
   }

   const hasError = useCallback((inputName: string) => {
      return Object.keys(errors).includes(inputName);
   }, [errors]);

   function handleChangePasswordState(isError: boolean) {
      setPasswordError(isError);
   }

   return(
      <div style={{ marginTop: 30, minWidth: 400 }}>
         <InputV2 
            inputName="email"
            placeholder="E-mail*"
            errorMessage="Por favor preencha o e-mail corretamente."
            label="Email"
            validation={inputValidation('email')}
            onError={onError}
            hasError={hasError('email')}
            onSuccess={onSuccess}
         />

         <InputV2 
            inputName="phone"
            placeholder="Telefone*"
            errorMessage="Telefone Inválido."
            label="Telefone"
            validation={inputValidation('phone')}
            mask={inputMasks('phone')}
            onError={onError}
            hasError={hasError('phone')}
            onSuccess={onSuccess}
            inlineValidation
         />

         <InputV2 
            inputName="cpf"
            placeholder="CPF*"
            errorMessage="CPF Inválido"
            label="Documento"
            validation={inputValidation('cpf')}
            mask={inputMasks('cpf')}
            onError={onError}
            hasError={hasError('cpf')}
            onSuccess={onSuccess}
         />

         <InputV2 
            inputName="password"
            placeholder="Senha*"
            errorMessage="Preencha a senha corretamente."
            label="Senha"
            isPassword
            showPasswordHelp
            hasError={passwordError}
            onError={() => handleChangePasswordState(true)}
            onSuccess={() => handleChangePasswordState(false)}
         />

         <p style={{ marginTop: 10 }}>
            {JSON.stringify(state, null, 2)}
         </p>
      </div>
   );
}