import { useEffect, useState } from 'react';

import { Cookies } from './types';

//pode ser assim
//record<1,2> => 1. key type, 2. value type
type Cookie = Record<string, string>;

export const useCookies = () => {
   const [cookies, setCookies] = useState<Cookies>();

   useEffect(() => {
      const navigatorCookies: Cookie = 
         document.cookie.split(';')
            .map(cookie => cookie.split('='))
            .reduce((acc, [key, ...values]) => ({
               ...acc,
               [key.trim()]: values.join('')
            }), {});
      setCookies(navigatorCookies);
   }, []);

   return {
      cookies,
   }
};