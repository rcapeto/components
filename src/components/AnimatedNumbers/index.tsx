import React, { FunctionComponent, useRef, useState, useEffect } from 'react';
import { classes } from '../../config/class';

import { IAnimatedNumbers } from './types';
import './styles.scss';

export type AnimatedNumbersProps = IAnimatedNumbers;

export const AnimatedNumber: FunctionComponent<IAnimatedNumbers> = ({ 
   number,
   delay = 60,
}) => {
   const [formatNumber, setFormatNumber] = useState(number);
   const [active, setActive] = useState(false);

   const baseClass = classes.base;
   const contentRef = useRef<HTMLDivElement>(null);

   const controlScroll = () => {
      const element = contentRef.current;

      if(element && !active) {
         const elementTOP = element.offsetTop;
         const windowHeight = window.innerHeight;
         const windowBottom = window.scrollY + window.innerHeight;

         const hasAppear = elementTOP + (windowHeight * 0.1) <= windowBottom;

         hasAppear && setActive(hasAppear);
      }
   };

   const startAnimation = () => {
      const total = number;
      const increment = Math.floor(total / 100);

      let i = 0;

      const interval = setInterval(() => {
         i += increment;

         setFormatNumber(i);

         if(i > total) {
            setFormatNumber(total);
            clearInterval(interval);
         }


      }, 50 * Math.random());
   };

   useEffect(() => {
      active && startAnimation();
   }, [active]);

   useEffect(() => {
      window.addEventListener('scroll', controlScroll);
      return () => window.removeEventListener('scroll', controlScroll);
   }, []);

   return (
      <div
         aria-label="Número Animado"
         data-animated-number={number}
         data-animated-delay={delay}
         className={`${baseClass}AnimatedNumber-Container`}
         ref={contentRef}
         data-animated-start={active}
         data-animated-end={!active}
      >
         <span title={formatNumber.toString()}>{formatNumber}</span>
      </div>
   );
};