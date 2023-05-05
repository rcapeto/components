export function EmailCheck(email: string) {
   const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   return re.test(String(email).toLowerCase());
};
 
export function PhoneCheck(value: string) {
   const regex = /^\(?[1-9]{2}\)? ?(?:[2-8]|9[1-9])[0-9]{3}-?[0-9]{4}$/;
   const isValid = regex.test(value);
   const valueWithoutChar = value.replace(/(\s|\D)/g, '');
   return isValid && valueWithoutChar.length === 11;
};

export function FullNameCheck(value: string) {
   const regex = /^[a-záàâãéèêíïóôõöúçñ]+( [a-záàâãéèêíïóôõöúçñ]+)+$/;
   const valueInLowerCase = value.toLowerCase();
   const isValid = regex.test(valueInLowerCase); 
   return isValid;
}

export function PersonDocumentCheck(document: string) {
   const cpf = document.replace(/\D/g, '');
   const pattern = /^(\d{1})\1{10}$/;
   
   if (cpf.length !== 11) {
      return false;
   }
   if (pattern.test(cpf)) {
      return false;
   }
   
   let sum = 0;
   let mod = 0;
   let digit = 0;
   let i = 0;

   for (i = 0; i < 9; i += 1) {
      sum += parseInt(cpf.charAt(i), 10) * (10 - i);
   }
   mod = sum % 11;
   digit = mod > 1 ? 11 - mod : 0;
   if (parseInt(cpf.charAt(9), 10) !== digit) {
      return false;
   }
   sum = 0;
   for (i = 0; i < 10; i += 1) {
      sum += parseInt(cpf.charAt(i), 10) * (11 - i);
   }
   mod = sum % 11;
   digit = mod > 1 ? 11 - mod : 0;
   if (parseInt(cpf.charAt(10), 10) !== digit) {
      return false;
   }
   return true;
}