import React, { FunctionComponent, useState, useEffect } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { RiSubtractFill } from 'react-icons/ri';

import { INumericStep } from './types';
import { classes } from '../../config/class';
import { colors } from '../../config/colors';

import './styles.scss';

export type NumericStepProps = INumericStep;

export const NumericStep: FunctionComponent<INumericStep> = ({ 
   onChangeNumber,
   size = 'small',
   limit = 10
}) => {
   const baseClass = classes.base;

   const [number, setNumber] = useState(0);
   const [incrementActive, setIncrementActive] = useState(true);
   const [decrementActive, setDecrementActive] = useState(true);

   const increment = () => {
      const currentNumber = number + 1;

      if(currentNumber <= limit) {
         setNumber(currentNumber);
         onChangeNumber && onChangeNumber(currentNumber);
      }
   };

   const decrement = () => {
      const currentNumber = number - 1;

      if(currentNumber >= 0) {
         setNumber(currentNumber);
         onChangeNumber && onChangeNumber(currentNumber);
      }
   };

   useEffect(() => {
      setIncrementActive(number < limit);
      setDecrementActive(number > 0);
   }, [number, limit]);

   return(
      <div
         data-numeric-step
         aria-label="Contador Numérico"
         className={`${baseClass}NumericStep-Container ${size}`}
      >  
         <button
            className={`${baseClass}NumericStep-Button ${decrementActive ? 'is--active' : 'blocked'} decrement`}
            data-numeric-step-decrement
            onClick={decrement}
            title="Diminuir"
         >
            <RiSubtractFill size={16} color={colors.white}/>
         </button>
         <div
            className={`${baseClass}NumericStep-Display`}
            data-current-number={number}
         >
            <p title={`${number}`}>
               {number}
            </p>
         </div>
         <button
            className={`${baseClass}NumericStep-Button ${incrementActive ? 'is--active': 'blocked'} increment`}
            data-numeric-step-increment
            onClick={increment}
            title="Somar"
         >
            <AiOutlinePlus size={16} color={colors.white}/>
         </button>
      </div>
   );
};