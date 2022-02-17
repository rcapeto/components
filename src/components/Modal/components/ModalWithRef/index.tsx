import { 
   forwardRef, 
   ForwardRefRenderFunction, 
   useState, 
   useImperativeHandle,
   useEffect
} from 'react';

import { IModalActions, IModalRefProps } from '../../types';
import { ModalCloseButton } from '../ModalCloseButton';
import { ModalContent } from '../ModalContent';
import { ModalOverlay } from '../ModalOverlay';

export type ModalRef = IModalActions;
 
const ModalWithRef: ForwardRefRenderFunction<IModalActions, IModalRefProps> = (props, ref) => {
   const { 
      animation,
      children,
      onCloseModal,
      onOpenModal,
      overlay,
      overlayClick = true,
      overlayRatio
   } = props;

   const [isOpen, setIsOpen] = useState<boolean>(false);

   const closeModal = () => {
      setIsOpen(false);
      onCloseModal && onCloseModal();
   };
   const openModal = () => {
      setIsOpen(true);
      onOpenModal && onOpenModal();
   };

   useImperativeHandle(ref, () => {
      return {
         closeModal,
         openModal,
         showProps: () => props,
      }
   });

   const handleOverlayCloseModal = overlayClick ? closeModal : () => {};

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
         closeModal={handleOverlayCloseModal}
      >
         <ModalContent>
            <ModalCloseButton closeModal={closeModal}/>
            { children }
         </ModalContent>
      </ModalOverlay>
   );
};

export default forwardRef(ModalWithRef);