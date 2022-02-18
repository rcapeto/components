import React, { FunctionComponent } from 'react';
import { classes } from '../../../../config/class';

import { TooltipPopupProps } from '../../types';

import './styles.scss';

export const TooltipPopup: FunctionComponent<TooltipPopupProps> = ({ 
   active,
   backgroundColor,
   delay,
   label,
   textColor,
   left,
   top
}) => {
   const baseClass = classes.base;
   return(
      <div 
         aria-label="Tooltip Message" 
         title={label}
         style={{
            transition: `all ease ${delay}ms`,
            color: textColor,
            backgroundColor,
            left,
            top
         }}
         data-tooltip-pop-up
         className={`${baseClass}Tooltip-Popup ${active ? 'is--active' : ''}`}
      >
         <p>{label}</p>
      </div>
   );
};