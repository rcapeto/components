import React, { FunctionComponent, useMemo, useState } from 'react';

import { classes } from '../../../../config/class';
import { ITabNavigationProps } from '../../types';
import { TabNavigationUp } from './components/TabNavigationUp';
import { TabNavigationContent } from './components/TabNavigationContent';
import './styles.scss';

export const TabNavigation: FunctionComponent<ITabNavigationProps> = ({
   items,
   navigationType = 'buttons',
   navigationPosition = 'center',
   onTabSelect
}) => {
   const [selectedIndex, setSelectedIndex] = useState(-1);

   const baseClass = classes.base;

   const tabs = useMemo(() => {
      return {
         tabsUp: items.map(item => ({ 
            tabTitle: item.tabTitle,
            tabId: item.tabId,
         })),
         tabsContent: items.map(item => ({
            tabId: item.tabId,
            heading: item.content.heading,
            paragraph: item.content.paragraph,
         }))
      }
   }, [items]);

   const handleSelectTab = (tabIndex: number) => {
      setSelectedIndex(tabIndex);
      onTabSelect && onTabSelect(tabIndex);
   };

   return(
      <div className={`${baseClass}TabNavigation-Container`}>
         <TabNavigationUp 
            navigationPosition={navigationPosition} 
            navigationType={navigationType}
            tabs={tabs.tabsUp}
            onSelectTab={handleSelectTab}
            selectedIndex={selectedIndex}
         />

         <TabNavigationContent
            selectedIndex={selectedIndex}
            tabsContent={tabs.tabsContent}
         />
      </div>
   );
};