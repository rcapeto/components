import React, { FunctionComponent, useEffect, useState } from 'react';

import { SubCategory } from '../../../../../../types';
import { classes } from '../../../../../../../../config/class';
import { colors } from '../../../../../../../../config/colors';
import './styles.scss';

export interface SubCategoryProps {
   item: SubCategory;
   active: boolean;
};

export const SubCategoryItem: FunctionComponent<SubCategoryProps> = ({
   item: {
      icon,
      link,
      title
   },
   active
}) => {
   const [isPage, setIsPage] = useState(false);
   const baseClass = classes.base;
   const Icon = icon;

   useEffect(() => {
      setIsPage(window.location.pathname === link);
   }, []);

   return(
      <li className={`${baseClass}Sidebar-Subcategory-Container ${!active ? '' : 'is--active'} ${isPage ? 'is--page' : ''}`}>
         <a href={link} title={title}>
            <Icon color={isPage? colors.purpleDark : colors.text} size={18}/>
            <p>{title}</p>
         </a>
      </li>
   );
};