import { FunctionComponent } from 'react';

import { IDefaultModalProps } from '../../types';

import { ModalOverlay } from '../ModalOverlay';
import { ModalContent } from '../ModalContent';
import { ModalCloseButton } from '../ModalCloseButton';

export const DefaultModal: FunctionComponent<IDefaultModalProps> = ({
   closeModal, isOpen, animation, overlay, overlayClick = true, overlayRatio, children
}) => {

   const handleCloseModal = overlayClick ? closeModal : () => {};

   return(
      <ModalOverlay 
         isOpen={isOpen} 
         animation={animation} 
         overlay={overlay} 
         overlayRatio={overlayRatio}
         closeModal={handleCloseModal}
      >
         <ModalContent>
            <ModalCloseButton closeModal={closeModal}/>
            { children }
         </ModalContent>
      </ModalOverlay>
   );
}; 