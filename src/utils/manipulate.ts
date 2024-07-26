export const manipulateURL = (
   type: 'set' | 'get',
   param: string,
   newValue?: string
) => {
   const url = new URL(window.location.href);

   switch(type) {
      case 'get':
         return url.searchParams.get(param);
      case 'set':
         if(newValue) {
            url.searchParams.set(param, newValue);
            window.history.replaceState(null, '', url.toString());
         }
         return null;
      default:
         return null;
   }
};