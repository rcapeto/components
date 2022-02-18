import React, { FunctionComponent, MouseEvent } from 'react';
import { AiOutlineClose } from 'react-icons/ai';

import { SidebarContentProps } from '../../types';
import { classes } from '../../../../config/class';
import { colors } from '../../../../config/colors';
import { SidebarItem } from './components/SidebarItem';

import './styles.scss';

export const SidebarContent: FunctionComponent<SidebarContentProps> = ({ 
   categories,
   closeSidebar,
   sidebarIsOpen,
}) => {
   const baseClass = classes.base;

   const handleCloseModal = (event: MouseEvent) => {
      if(closeSidebar) {
         const element = event.target as HTMLElement;
         const isContent = element.closest('[data-sidebar-content]');
         
         !isContent && closeSidebar();
      }
   };

   return(
      <div
         className={`${baseClass}Sidebar-Overlay ${sidebarIsOpen ? 'is--active' : ''}`}
         aria-label="Overlay do Sidebar"
         data-sidebar-open={sidebarIsOpen}
         onClick={handleCloseModal}
      >
         <div
            className={`${baseClass}Sidebar-Content`}
            aria-label="Conteúdo do Sidebar"
            data-sidebar-content
         >
            <header>
               <h2>Menu</h2>
               <button
                  onClick={closeSidebar}
                  aria-label="Fechar Sidebar"
                  title="Fechar Sidebar"
               >
                  <AiOutlineClose 
                     color={colors.black}
                     size={25}
                  />
               </button>
            </header>

            <section>
               <nav aria-label="Categories Menu">
                  <ul>
                     {
                        categories.map((category, index) => (
                           <SidebarItem 
                              item={category} 
                              key={String(index)}
                              sidebarIsOpen={sidebarIsOpen}
                           />
                        ))
                     }
                  </ul>
               </nav>
            </section>
         </div>
      </div>
   );
};