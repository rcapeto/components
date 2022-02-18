import { IconType } from 'react-icons';

export interface ISideBar {
   categories: Category[];
   closeWithOverlayClick?: boolean;
   closeWithESC?: boolean;
   buttonTitle?: string;
   iconColor?: string;
   iconSize?: number;
};

export interface Category {
   title: string;
   icon: IconType;
   subcategories: SubCategory[];
};

export interface SubCategory {
   link: string;
   icon: IconType;
   title: string;
};

export interface SidebarContentProps {
   categories: Category[];
   sidebarIsOpen: boolean;
   closeSidebar: () => void;
};

export interface SidebarButtonProps {
   iconColor: string;
   iconSize: number;
   buttonTitle: string;
   toggleSidebar: () => void;
   sidebarIsOpen: boolean;
};