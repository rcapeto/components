import React, { FunctionComponent, useState, useEffect } from 'react';

import { ButtonSideBar } from './components/ButtonSideBar';
import { SidebarContent } from './components/SidebarContent';
import { ISideBar, Category } from './types';

export type SidebarCategory = Category; 

export const Sidebar: FunctionComponent<ISideBar> = ({ 
   categories,
   buttonTitle = 'Menu',
   closeWithESC = true,
   closeWithOverlayClick = true,
   iconColor = '#000',
   iconSize = 20
}) => {
   const [sidebarIsOpen, setSidebarIsOpen] = useState<boolean>(false);

   const handleToggleSideBar = () => {
      setSidebarIsOpen(!sidebarIsOpen);
   };

   const handleCloseWithESC = (event: KeyboardEvent) => {
      const isEscape = event.key === 'Escape';
      isEscape && closeWithESC && setSidebarIsOpen(false);
   };

   const closeSidebar = () => {
      closeWithOverlayClick && 
      setSidebarIsOpen(false);
   };

   useEffect(() => {
      document.addEventListener('keydown', handleCloseWithESC);
      return () => document.removeEventListener('keydown', handleCloseWithESC);
   }, []);

   return(
      <>
         <ButtonSideBar 
            buttonTitle={buttonTitle}
            iconSize={iconSize}
            iconColor={iconColor}
            toggleSidebar={handleToggleSideBar}
            sidebarIsOpen={sidebarIsOpen}
         />

         <SidebarContent 
            categories={categories}
            sidebarIsOpen={sidebarIsOpen}
            closeSidebar={closeSidebar}
         />
      </>
   );
};