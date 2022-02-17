import { useEffect, useState } from 'react';

import { IUseDevice, initialState } from './types';

export const useDevice = (): IUseDevice => {
   const [state, setState] = useState<IUseDevice>(initialState);


   useEffect(() => {
      setState({
         isMobile: window.innerWidth < 768,
      });
   }, []);

   return {
      ...state
   }
};