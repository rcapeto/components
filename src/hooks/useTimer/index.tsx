import { useEffect, useState } from 'react';

import { IUseTimer, initialState } from './types';
import { ONE_SECOND_IN_MILLIS } from './config';
import { hasEndTimer,  parseTimeRemaining } from './utils';

// dateFormat => '2022-02-17T05:50:38.415Z'
export const useTimer = (date: string): IUseTimer | ErrorConstructor => {
   const [state, setState] = useState<IUseTimer>(initialState);

   if(!date) throw new Error('error [useTimer]: Please set one date to start the counter.');

   const updateTimer = () => {
      const now = new Date();
      const finalDate = new Date(date);
   
      const nowTime = now.getTime();
      const finalDateTime = finalDate.getTime();
      const secondsLeft = finalDateTime - nowTime;

      const hasEnd = hasEndTimer(date);

      if(secondsLeft > 0) {
         const timing = parseTimeRemaining(secondsLeft);
         setState({ ...timing, hasEnd });

      } else {
         setState({
            ...initialState,
            hasEnd
         });
      }
   };

   useEffect(() => {
      !state.hasEnd && setTimeout(updateTimer, ONE_SECOND_IN_MILLIS);
   }, [date]);

   return { ...state };
};
