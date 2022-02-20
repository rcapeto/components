import React, { FunctionComponent, useEffect, useState } from 'react';

import { classes } from '../../config/class';
import './styles.scss';

export const BarPercentual: FunctionComponent = () => {
   const [percentual, setPercentual] = useState<number>(0);
   const baseClass = classes.base;

   const updatePercentual = () => {
      const documentHeight = document.documentElement.scrollHeight;
      const currentScroll = window.scrollY;
      const scroll = currentScroll + window.innerHeight;

      const currentPercent = (100 * scroll) / documentHeight;

      if(currentScroll == 0) {
         setPercentual(0);
      } else {
         setPercentual(currentPercent);
      }
   };

   useEffect(() => {
      window.addEventListener('scroll', updatePercentual);
      return () => window.removeEventListener('scroll', updatePercentual);
   }, []);

   return(
      <div
         className={`${baseClass}BarPercentual-Container`}
         aria-label="Percentual Bar"
      >  
         <div 
            className={`${baseClass}BarPercentual-Progress`}
            style={{ width: `${percentual}%`}}
            data-percentual={`${percentual}%`}
         />
      </div>
   );
};