export function omit<Type>(object: Type, keys?: Array<keyof Type>) {
   if(typeof object !== 'object') {
      throw Error('First parameter must be an object');
   }
   
   const cloneObject = { ...object };

   for(const key in cloneObject) {
      if(keys && keys.includes(key as keyof object)) {
         delete cloneObject[key];
      }
   }

   return cloneObject;
}