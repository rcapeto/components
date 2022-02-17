import { forwardRef, ForwardRefRenderFunction, useState, useImperativeHandle } from 'react';

import { IModalActions, IModalRefProps } from '../../types';

const ModalWithRef: ForwardRefRenderFunction<IModalActions, IModalRefProps> = (props, ref) => {
   const {} = props;

   const [isOpen, setIsOpen] = useState<boolean>(false);

   const closeModal = () => setIsOpen(false);
   const openModal = () => setIsOpen(true);

   useImperativeHandle(ref, () => {
      return {
         closeModal,
         openModal,
         showProps: () => props,
      }
   });

   return(
      <h1>ModalWithRef {isOpen}</h1>
   );
};

export default forwardRef(ModalWithRef);