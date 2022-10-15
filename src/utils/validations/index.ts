export function EmailCheck(email: string) {
   const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   return re.test(String(email).toLowerCase());
};
 
export function PhoneCheck(value: string) {
   const regex = /^\(?[1-9]{2}\)? ?(?:[2-8]|9[1-9])[0-9]{3}-?[0-9]{4}$/;
   const isValid = regex.test(value);
   const valueWithoutChar = value.replace(/(\s|\D)/g, '');
   return isValid && valueWithoutChar.length === 11;
};
 