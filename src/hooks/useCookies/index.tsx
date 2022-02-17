import { useEffect, useState } from 'react';

import { Cookies } from './types';

export const useCookies = () => {
   const [cookies, setCookies] = useState<Cookies>();

   useEffect(() => {
      const navigatorCookies = 
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