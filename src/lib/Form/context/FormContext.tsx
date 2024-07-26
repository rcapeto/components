import { createContext, useContext, ReactNode, FormEvent, useState } from 'react';

interface FormProviderProps {
   children: ReactNode;
};

export interface FormInputContext {
   name: string;
   value: string;
   hasError: boolean;
   errorMessage: string;
};

export type CBSubmitFNC = (inputs: FormInputContext[], error: boolean) => Promise<void> | void;

interface FormValues {
   handleSubmit: (event: FormEvent, cb: CBSubmitFNC | undefined) => Promise<void>;
   hasError: boolean;
   loading: boolean;
   getInputs: () => FormInputContext[];
   controlChildrens: boolean;
};

const FormContext = createContext({} as FormValues);

export function FormProvider({ children }: FormProviderProps) {
   const [hasError, setHasError] = useState<boolean>(false);
   const [loading, setLoading] = useState<boolean>(false);

   async function handleSubmit(event: FormEvent, callback: CBSubmitFNC | undefined) {
      setHasError(false);

      event.preventDefault();

      const inputs = getInputs();
      const hasOneOrMoreError = inputs.filter(input => input.hasError).length > 0;
      const hasOneOrMoreWithoutValue = inputs.filter(input => !input.value).length > 0;
      const formHasError = hasOneOrMoreError || hasOneOrMoreWithoutValue;

      window.dispatchEvent(
         new CustomEvent("@FormLib.Submit", { 
            detail: { 
               inputs,
               formHasError
            }
         }),
      );

      setHasError(formHasError);
      setLoading(true);

      try {
         callback && await callback(inputs, formHasError);
      } catch(error) {
         console.error("Error FormLib", error);
      } finally {
         setLoading(false);
      }

   }

   function getInputs(): FormInputContext[] {
      const inputs = document.querySelectorAll('input[data-lib-form]') as NodeListOf<HTMLInputElement>;

      return Array.from(inputs).map(input => {
         const { value, name } = input;

         const dataErrorAttr = input.getAttribute('data-input-has-error');
         const hasError = dataErrorAttr ? (
            dataErrorAttr === 'true' ? true : false
         ) : false;
         const errorMessage = input.getAttribute('data-input-error-message') ?? '';

         return { value, name, hasError, errorMessage };
      });
   }

   return(
      <FormContext.Provider 
         value={{ 
            handleSubmit,
            hasError,
            getInputs,
            loading,
            controlChildrens: true,
         }}
      >
         { children }
      </FormContext.Provider>
   );
}

export const useForm = () => useContext(FormContext);