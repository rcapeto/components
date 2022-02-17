import { FunctionComponent } from 'react';

import { IDefaultModalProps } from '../../types';

export const DefaultModal: FunctionComponent<IDefaultModalProps> = ({ 
   animation = true,
   isOpen,
   overlay = true,
   closeModal
}) => {
   return(
      <h1>Modal</h1>
   );
};