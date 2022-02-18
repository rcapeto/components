import React, { FunctionComponent } from 'react';
import { FiMenu } from 'react-icons/fi';

import { SidebarButtonProps } from '../../types';
import { classes } from '../../../../config/class';

import './styles.scss';

export const ButtonSideBar: FunctionComponent<SidebarButtonProps> = ({ 
   buttonTitle,
   iconColor,
   iconSize,
   toggleSidebar,
   sidebarIsOpen
}) => {
   const baseClass = classes.base;

   return(
      <button
         aria-label={`${sidebarIsOpen ? 'Fechar' : 'Abrir'} Sidebar`}
         title={`${sidebarIsOpen ? 'Fechar' : 'Abrir'} Sidebar`}
         onClick={toggleSidebar}
         className={`${baseClass}Sidebar-Button-Container`}
         data-sidebar-active={sidebarIsOpen}
      >
         <FiMenu color={iconColor} size={iconSize} />
         {
            buttonTitle && (
               <p style={{ color: iconColor }}>
                  {buttonTitle}
               </p>
            )
         }
      </button>
   );
};