export type Field = 'birth_date' | 'cellphone' | 'cpf';

export const MaskInput = <P>(field: P | Field, value: string): string => {
   const regexRemoveChar = /\D/g;

   switch(field) {
      case 'birth_date':
         value = value.replace(regexRemoveChar, '');
         
         const birthRegex = /(\d{2})(\d)/;

         value = value.replace(birthRegex, '$1/$2');
         value = value.replace(birthRegex, '$1/$2');

         if(value.length > 10) value = value.slice(0, -1);

         return value;
      case 'cellphone':
         value = value.replace(regexRemoveChar, '');
         value = value.replace(/(\d{2})(\d)/, '($1) $2');
         value = value.replace(/(\d{5})(\d)/, '$1-$2');
         if(value.length > 15) value = value.slice(0, -1);

         return value;
      case 'cpf':
         value = value.replace(regexRemoveChar, '');

         const cpfRegex = /(\d{3})(\d)/;
         const regexString = '$1.$2';
   
         value = value.replace(cpfRegex, regexString);
         value = value.replace(cpfRegex, regexString);
         value = value.replace(cpfRegex, '$1-$2');
   
         if(value.length > 14) value = value.slice(0, -1);
   
         return value;
         
      default:
         return value;
   }
};
