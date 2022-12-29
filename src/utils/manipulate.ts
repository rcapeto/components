export const manipulateURL = (
   type: 'set' | 'get',
   skuId?: string
) => {
   const url = new URL(window.location.href);
   const searchSkuID = 'idsku';

   switch(type) {
      case 'get':
         return url.searchParams.get(searchSkuID);
      case 'set':
         if(skuId) {
            url.searchParams.set(searchSkuID, skuId);
            window.history.replaceState(null, '', url.toString());
         }
         return null;
      default:
         return null;
   }
};