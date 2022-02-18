import React, { FunctionComponent, useState, useEffect } from 'react';
import { FiChevronRight } from 'react-icons/fi';

import { Category } from '../../../../types';
import { classes } from '../../../../../../config/class';
import { colors } from '../../../../../../config/colors';
import { SubCategoryItem } from './components/SubCategory';

import './styles.scss';

export interface SidebarItemProps {
   item: Category;
   sidebarIsOpen: boolean;
};

export const SidebarItem: FunctionComponent<SidebarItemProps> = (props) => {
   const [isActive, setIsActive] = useState<boolean>(false);

   const handleClick = () => setIsActive(!isActive);

   const { 
      item: {
         icon,
         subcategories,
         title
      },
      sidebarIsOpen
   } = props;

   const baseClass = classes.base;
   const Icon = icon;

   useEffect(() => {
      if(!sidebarIsOpen) setIsActive(false);
   }, [sidebarIsOpen])

   return(
      <li
         className={`${baseClass}Sidebar-Item-Container ${isActive ? 'is--active' : ''}`}
         title={title}
         onClick={handleClick}
         data-item-open={isActive}
      >
         <div className={`${baseClass}Sidebar-Item-Header`}>
            <div>
               <Icon color={colors.black} size={18}/>
               <p>{title}</p>
            </div>

            <FiChevronRight color={colors.black} size={18} />
         </div>
         <div className={`${baseClass}Sidebar-Item-Submenu`}>
            <nav aria-label="Subcategories Menu">
               <ul>
                  {
                     subcategories.map((subcategory, index) => (
                        <SubCategoryItem 
                           item={subcategory}
                           key={String(index)}
                           active={isActive}
                        />
                     ))
                  }
               </ul>
            </nav>
         </div>
      </li>
   );
};