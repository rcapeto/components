import { FunctionComponent } from 'react';

import { IDefaultModalProps } from '../../types';

export const DefaultModal: FunctionComponent<IDefaultModalProps> = ({ 
   animation,
   isOpen,
   overlay,
   setIsOpen,
}) => {
   return(
      <h1>Modal</h1>
   );
};