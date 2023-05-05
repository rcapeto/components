interface CheckEmptyFieldsResponse {
   emptyKeys: string[];
   hasEmpty: boolean;
}

export function checkEmptyFields<Type extends object>(
   data: Type, 
   uncheckFields?: Array<keyof Type>
): CheckEmptyFieldsResponse {
   const uncheck = uncheckFields ?? [];
   const keys = Object.keys(data) as Array<keyof Type>;
   const emptyKeys: string[] = []

   const filteredKeys = keys.filter(key => !uncheck.includes(key));
   const filteredObject: Record<any, any> = filteredKeys.reduce((object, current) => ({
      ...object,
      [current]: data[current],
   }), {});

   for(const key in filteredObject) {
      const value = filteredObject[key];

      if(!value) {
         emptyKeys.push(key);
      }
   }

   return { 
      hasEmpty: Object.values(filteredObject).some(value => !value),
      emptyKeys,
   };
}

const data = { 
   name: 'name',
   lastName: 'lastName',
   age: 20,
   address: '',
   teste: ''
}

checkEmptyFields(data, ['teste'])