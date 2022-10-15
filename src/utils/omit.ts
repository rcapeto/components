export function omit(object: Object, keys?: string[]) {
   if(typeof object !== 'object') {
      throw Error('First parameter must be an object');
   }

   const cloneObject = JSON.parse(JSON.stringify(object));

   for(const key in cloneObject) {
      if(keys && keys.includes(key)) {
         delete cloneObject[key];
      }
   }

   return cloneObject;
}