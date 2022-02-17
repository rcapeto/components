import { FunctionComponent } from 'react';
import { AiOutlineClose } from 'react-icons/ai';

import { classes } from '../../../../config/class';
import { colors } from '../../../../config/colors';
import './styles.scss';

export interface IModalCloseButton {
   closeModal: () => void;
};

export const ModalCloseButton: FunctionComponent<IModalCloseButton> = ({
   closeModal
}) => {
   const baseClass = classes.base;

   return(
      <div className={`${baseClass}Modal-Close-Button`}>
         <button
            onClick={closeModal}
            aria-label="Close Modal"
            title="Fechar Modal"
         >
            <AiOutlineClose 
               size={20}
               color={colors.black}
            />
         </button>
      </div>
   );
};