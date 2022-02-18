import React, { FunctionComponent } from 'react';
import { classes } from '../../../../../../config/class';

import { TabNavigationContentProps } from '../../../../types';
import './styles.scss';

export const TabNavigationContent: FunctionComponent<TabNavigationContentProps> = ({
   selectedIndex,
   tabsContent
}) => {
   const baseClass = classes.base;

   return(
      <div 
         aria-label="Navegação em botões"
         className={`${baseClass}TabNavigation-Container-Content`}
      >
         {
            tabsContent.map((tab,index) => (
               <div 
                  title={tab.heading}
                  key={String(index)}
                  className={`${baseClass}TabNavigation-Content ${selectedIndex === index ? 'is--active' : ''}`}
                  data-tab-active={selectedIndex === index}
                  data-tab-id={tab.tabId}
               >
                 <h2>{tab.heading}</h2>
                 <p dangerouslySetInnerHTML={{ __html: tab.paragraph }}/>
               </div>
            ))
         }
      </div>
   );
};