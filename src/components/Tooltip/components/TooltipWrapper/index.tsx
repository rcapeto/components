import React, { FunctionComponent, MouseEvent, useState } from 'react';

import { TooltipProps } from '../../types';
import { colors } from '../../../../config/colors';
import { classes } from '../../../../config/class';
import { TooltipPopup } from '../TooltipPopup';

import './styles.scss';

export const TooltipWrapper: FunctionComponent<TooltipProps> = ({
   label,
   textColor = colors.white,
   backgroundColor = colors.tooltip_colors,
   delay = 200,
   children
}) => {
   const [isActive, setIsActive] = useState(false);
   const [left, setLeft] = useState('0px');
   const [top, setTop] = useState('0px');

   const baseClass = classes.base;

   const handleMouseOver = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;
      const tooltip = document.querySelector('[data-tooltip-pop-up]') as HTMLElement;

      if(tooltip) {
         const tooltipWidth = tooltip.clientWidth;
         const tooltipHeight = tooltip.clientHeight;

         const outOfScreenX = clientX + tooltipWidth >= windowWidth;
         const outOfScreenY = clientY + tooltipHeight >= windowHeight;

         setLeft(!outOfScreenX ? `${clientX}px`: `${windowWidth - tooltipWidth}px`);
         setTop(!outOfScreenY ? `${clientY}px` : `${windowHeight - tooltipHeight}px`);
      }
      setIsActive(true);
   };

   return(
      <div 
         className={`${baseClass}Tooltip-Wrapper ${isActive ? 'is--active' : ''}`}
         aria-label="Tooltip Wrapper"
         onMouseOver={handleMouseOver}
         onMouseLeave={() => setIsActive(false)}
      >
         { children }
         <TooltipPopup 
            active={isActive}
            label={label}
            delay={delay}
            backgroundColor={backgroundColor}
            textColor={textColor}
            left={left}
            top={top}
         />
      </div>
   );
};