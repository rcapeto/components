type InputMask = 'phone' | 'cpf';

export function inputMasks(mask: InputMask): (text: string) => string {
   const regexRemoveChar = /\D/g;

   return function (text: string) {
      let value = text;

      switch(mask) {
         case 'cpf':
            value = value.replace(regexRemoveChar, '');

            const cpfRegex = /(\d{3})(\d)/;
            const regexString = '$1.$2';

            value = value.replace(cpfRegex, regexString);
            value = value.replace(cpfRegex, regexString);
            value = value.replace(cpfRegex, '$1-$2');

            if(value.length > 14) value = value.slice(0, -1);

            return value;
         case 'phone':
            value = text.replace(regexRemoveChar, '');
            value = value.replace(/(\d{2})(\d)/, '($1) $2');
            value = value.replace(/(\d{5})(\d)/, '$1-$2');
            if(value.length > 15) value = value.slice(0, -1);
            return value;
         default:
            return text;
      }
   }
}