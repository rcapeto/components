import React, { FunctionComponent } from 'react';

import { INavigationButton } from './types';
import { classes } from '../../config/class';
import { colors } from '../../config/colors';
import './styles.scss';

export type NavigationButtonProps = INavigationButton;

export const NavigationButton: FunctionComponent<INavigationButton> = ({ 
   sectionId,
   backgroundColor = colors.purple,
   color = colors.white,
   text = 'Navigation Button'
}) => {
   const baseClass = classes.base;
   
   const handleNavigate = () => {
      const element = document.getElementById(sectionId) as HTMLElement;
      const elementPositionTop = element.offsetTop ?? 0;
      window.scrollTo({ top: elementPositionTop - 20, behavior: 'smooth' });
   };

   return(
      <div 
         className={`${baseClass}NavigationButton-Container`}
         data-navigate-to={sectionId}
         data-section-id={`#${sectionId}`}
         aria-label="Botão de Navegação"
         onClick={handleNavigate}
         title={text}
         style={{ backgroundColor, color }}
      >
         { text }
      </div>
   );
};