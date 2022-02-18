import React, { FunctionComponent } from 'react';
import { classes } from '../../../../../../config/class';

import { TabNavigationUpProps } from '../../../../types';
import './styles.scss';

export const TabNavigationUp: FunctionComponent<TabNavigationUpProps> = ({
   navigationPosition,
   navigationType,
   tabs,
   onSelectTab,
   selectedIndex
}) => {
   const baseClass = classes.base;

   return(
      <div 
         aria-label="Navegação em botões"
         className={`${baseClass}TabNavigation-Container-Up ${navigationType} ${navigationPosition}`}
      >
         {
            tabs.map((tab,index) => (
               <div 
                  title={tab.tabTitle}
                  key={String(index)}
                  className={`${baseClass}TabNavigationButton ${navigationType} ${selectedIndex === index ? 'is--active' : ''}`}
                  onClick={() => onSelectTab(index)}
                  data-active-tab-index={selectedIndex}
                  data-active={selectedIndex === index}
                  data-button-tab-id={tab.tabId}
               >
                  <button>
                     { tab.tabTitle }
                  </button>
               </div>
            ))
         }
      </div>
   );
};