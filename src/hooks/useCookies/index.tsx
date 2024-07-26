import { useEffect, useState } from 'react';

type Cookie = Record<string, string>;

interface CookieConfig {
   expireDays?: number;
   path?: string;
}

interface FormatedCookieConfig {
   expireDays?: string;
   path?: string;
   key: string;
   value?: string;
   'Max-Age'?: string;
};

export const useCookies = () => {
   const [cookies, setCookies] = useState<Cookie>();

   const setCookie = (key: string, value: string, config?: CookieConfig) => {
      const formatPath = (config && config.path) ?? '/';
      const domain = window.location.hostname;

      const hasCookie = getCookie(key);
      
      if(hasCookie) return;

      const state = { 
         domain,
         path: formatPath,
         key,
         expires: '',
         value
      };

      if(config && config.expireDays) {
         const date = new Date();
         date.setDate(date.getDate() + config.expireDays);

         state.expires = date.toUTCString();
      }

      const cookie = formatedCookie(state);
      document.cookie = cookie;
   };

   const getCookie = (key: string) => {
      const allCookies = getAll();

      if(!allCookies) return;

      const state = {
         cookie: '',
      };

      for(const cookieKey of Object.keys(allCookies)) {
         if(cookieKey === key) {
            state.cookie = allCookies[cookieKey];
         }
      }

      return state.cookie ? state.cookie : undefined;
   };

   const getAll = () => {
      const navigatorCookies: Cookie = 
            document.cookie.split(';')
               .map(cookie => cookie.split('='))
               .reduce((acc, [key, ...values]) => ({
                  ...acc,
                  [key.trim()]: values.join('')
               }), {});
      return navigatorCookies;
   };

   //para remover precisa ter o mesmo path.
   const removeCookie = (key: string, config?: CookieConfig) => {
      const formatPath = (config && config.path) ?? '/';
      const domain = window.location.hostname;

      const state = { 
         domain,
         path: formatPath,
         'Max-Age': '-99999999',
         key,
         expires: '',
      };

      if(config && config.expireDays) {
         const date = new Date();
         date.setDate(date.getDate() + config.expireDays);

         state.expires = date.toUTCString();
      }

      const cookie = formatedCookie(state);
      document.cookie = cookie;
   } 

   const formatedCookie = (config: FormatedCookieConfig) => {
      let str: string = '';

      for(const [key, value] of Object.entries(config)) {
         if(value && key !== 'key' && key !== 'value') {
            str += ` ${key}=${value};`
         }
      }

      if(config.value) {
         return `${config.key}=${config.value};${str}`;
      } else {
         return `${config.key}=;${str}`;
      }
   };

   useEffect(() => {
      setCookies(getAll());
   }, []);

   return {
      cookies,
      setCookie,
      getCookie,
      getAll,
      removeCookie
   }
};