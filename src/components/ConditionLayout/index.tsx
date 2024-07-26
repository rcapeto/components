import { FunctionComponent } from 'react';
import { classes } from '../../config/class';

import { ConditionItemArray as ItemArray, ConditionLayoutProps as Props } from './types';

export type ConditionItemArray = ItemArray;
export type ConditionLayoutProps = Props;


export const ConditionLayout: FunctionComponent<Props> = ({ 
   condition, 
   Else,
   children,
   conditionArrayType = 'only-one',
}) => {
   const baseClass = classes.base;

   if(Array.isArray(condition)) {
      const hasTrue = conditionArrayType === 'all' ? 
         condition.every(item => item.condition) : 
         condition.some(item => item.condition)
      ;
     
      return(
         <div data-condition-container className={`${baseClass}-condition-layout`}>
            { hasTrue ? children : Else }
         </div>
      );
   }
   
   return(
      <div data-condition-container className={`${baseClass}-condition-layout`}>
         { condition ? children : Else }
      </div>
   );
};