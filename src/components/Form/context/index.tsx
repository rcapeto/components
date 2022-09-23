import { createContext, useContext, ReactNode, useState } from 'react';

type FncWithChildren = {
   children: ReactNode;
};

type ContextValues = {
   loading: boolean;
   toggleLoading: () => void;
   fields: Record<string, string>;
   addFields: (fieldName: string) => void;
   updateFieldValue: (fieldName: string, value: string) => void;
   hasError: boolean;
   updateErrorValue: (error: boolean) => void;
};

const FormContext = createContext({} as ContextValues);

export function FormProvider({ children }: FncWithChildren) {
   const [loading, setLoading] = useState(false);
   const [fields, setFields] = useState<Record<string, string>>({});
   const [hasError, setHasError] = useState(false);

   function toggleLoading() {
      setLoading(state => !state);
   };

   function addFields(fieldName: string) {
      if(!Object.keys(fields).includes(fieldName)) {
         setFields({
            ...fields,
            [fieldName] : '',
         })
      }
   };

   function updateFieldValue(fieldName: string, value: string) {
      const updateFields = { ...fields };
      updateFields[fieldName] = value;
      setFields(updateFields);
   }  

   function updateErrorValue(err: boolean) {
      setHasError(err);
   }

   return(
      <FormContext.Provider 
         value={{ 
            loading, 
            toggleLoading, 
            fields, 
            addFields, 
            updateFieldValue,
            updateErrorValue,
            hasError, 
         }}
      >
         { children }
      </FormContext.Provider>
   );
}

export const useForm = () => useContext(FormContext);