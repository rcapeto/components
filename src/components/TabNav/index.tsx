import { 
   ITabNavigationProps, 
   NavigationItem as Item, 
   TabNavigationPosition as Position, 
   TabNavigationType as Type
} from './types';
import { TabNavigation } from './components/TabNavigation';

export type TabNavigationProps = ITabNavigationProps;
export type NavigationItem = Item;
export type TabNavigationPosition = Position;
export type TabNavigationType = Type;

export {
   TabNavigation
}