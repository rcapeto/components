export interface ITabNavigationProps {
   navigationType?: TabNavigationType;
   navigationPosition?: TabNavigationPosition;
   items: NavigationItem[];
   onTabSelect?: (tabIndex: number) => void;
};

export interface NavigationItem {
   tabTitle: string;
   tabId: string;
   content: {
      heading: string;
      paragraph: string;
   },
};

export interface TabNavigationUpProps {
   navigationType: TabNavigationType;
   navigationPosition: TabNavigationPosition;
   tabs: {
      tabTitle: string;
      tabId: string;
   }[];
   onSelectTab: (index: number) => void;
   selectedIndex: number;
};

export interface TabNavigationContentProps {
   selectedIndex: number;
   tabsContent: {
      heading: string;
      paragraph: string;
      tabId: string;
   }[]
};

type TabNavigationType = 'buttons' | 'tabs';
type TabNavigationPosition = 'center' | 'left' | 'right';