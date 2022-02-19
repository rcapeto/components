export interface Data {
   [key: string]: string;
};

export interface EmptyField {
   key: string;
};

export const useForm = () => {
   const checkEmptyFields = (data: Data, ...fieldsDontVerify: string[] ) => {
      let hasEmptyFild = false;
      const emptyFields: EmptyField[] = [];

      for(const key in data) {
         const value = data[key];

         if(fieldsDontVerify.includes(key)) continue;

         if(!value) {
            hasEmptyFild = true;
            emptyFields.push({ key });
         }
      }

      return {
         hasEmptyFild,
         emptyFields,
         fields: data
      }
   };

   return {
      checkEmptyFields
   }
};

