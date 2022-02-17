import { FunctionComponent } from 'react';

import { classes } from '../../../../config/class';

import './styles.scss';

export const ModalContent: FunctionComponent = ({ children }) => {
   const baseClass = classes.base;

   return(
      <div 
         className={`${baseClass}Modal-Content`} 
         aria-label="Modal Content" 
         data-modal-content
      >
         { children }
      </div>
   );
};