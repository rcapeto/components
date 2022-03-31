import { useState, useEffect } from 'react';

import { charLower, charNumbers, charSymbols, charUpper, randomizeArray } from './utils';
import { UseRandomStringConfig } from './types';

const initialProps: Required<UseRandomStringConfig> = {
   length: 16,
   numbers: false,
   symbols: true,
   upper: false
}

export const useRandomString = (props?: UseRandomStringConfig) => {
   const { 
      length = initialProps.length,
      numbers = initialProps.numbers,
      upper = initialProps.upper, 
      symbols = initialProps.symbols,
   } = props ?? initialProps;

   const [randomString, setRandomString] = useState<string>('');

   useEffect(() => {
      const stringArray: string[] = [...charLower];
      const random: string[] = []; 

      upper && stringArray.push(...charUpper);
      symbols && stringArray.push(...charSymbols);
      numbers && stringArray.push(...charNumbers);

      for(let i = 0; i < (length ?? initialProps.length); i++) {
         const randomStringArray = randomizeArray<string>(stringArray);
         const randomLength = Math.floor(Math.random() * randomStringArray.length);
         const randomChar = randomStringArray[randomLength];

         random.push(randomChar);
      }

      setRandomString(random.join(''));

   }, []);

   return { randomString };
};