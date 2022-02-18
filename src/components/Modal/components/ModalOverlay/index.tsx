import { FunctionComponent, MouseEvent, useEffect } from 'react';
import { IModalProps } from '../../types';

import { classes } from '../../../../config/class';

import './styles.scss';

export type ModalOverlayProps = IModalProps & {
   isOpen: boolean;
   closeModal?: () => void;
};

export const ModalOverlay: FunctionComponent<ModalOverlayProps> = ({ 
   isOpen,
   animation = true,
   children,
   overlay = true,
   overlayRatio = 6,
   closeModal,
}) => {
   const baseClassName = classes.base;

   const getAspectRatio = (ratio: number, hasOverlay: boolean) => {
      if(!hasOverlay) return 0;
      if(ratio > 10) return 10;
      if(ratio < 1) return 1;
      return ratio;
   };

   const handleCloseModal = (event: MouseEvent) => {
      if(closeModal) {
         const element = event.target as HTMLElement;
         const isContent = element.closest('[data-modal-content]');
         
         !isContent && closeModal();
      }
   };

   const closeModalWithESC = (event: KeyboardEvent) => {
      (event.key === 'Escape') && closeModal && closeModal();
   };

   useEffect(() => {
      document.addEventListener('keydown', closeModalWithESC);
      return () => document.removeEventListener('keydown', closeModalWithESC);
   }, []);


   return(
      <div
         className={`${baseClassName}Modal-Overlay ${isOpen ? 'is--active' : ''} bg-ratio-${getAspectRatio(overlayRatio, overlay)} ${animation ? 'has--animation' : ''}`}
         data-modal-overlay
         aria-label='Modal Overlay'
         data-modal-open={isOpen}
         onClick={handleCloseModal}
      >
         { children }
      </div>
   );
};