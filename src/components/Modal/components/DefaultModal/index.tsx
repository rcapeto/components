import { FunctionComponent, useEffect } from 'react';

import { IDefaultModalProps } from '../../types';

import { ModalOverlay } from '../ModalOverlay';
import { ModalContent } from '../ModalContent';
import { ModalCloseButton } from '../ModalCloseButton';

export const DefaultModal: FunctionComponent<IDefaultModalProps> = ({
   closeModal, isOpen, animation, overlay, overlayClick = true, overlayRatio, children
}) => {

   const handleCloseModal = overlayClick ? closeModal : () => {};

   const closeModalWithESC = (event: KeyboardEvent) => {
      (event.key === 'Escape') && closeModal();
   };

   useEffect(() => {
      document.addEventListener('keydown', closeModalWithESC);
      return () => document.removeEventListener('keydown', closeModalWithESC);
   }, []);

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