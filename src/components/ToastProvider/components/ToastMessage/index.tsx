import React, { FunctionComponent, useEffect } from 'react';
import { AiOutlineClose } from 'react-icons/ai';

import { useToast } from '../../context';
import { classes } from '../../../../config/class';
import { colors } from '../../../../config/colors';

import './styles.scss';

export const ToastMessage: FunctionComponent = () => {
   const baseClass = classes.base;

   const { active, handleRemoveToast, message, positionY, positionX, toastType } = useToast();

   const closeToastWithESC = (event: KeyboardEvent) => {
      const escapeKey = event.key === 'Escape';

      active && escapeKey && handleRemoveToast();
   }

   useEffect(() => {
      window.addEventListener('keydown', closeToastWithESC);
      return () => window.removeEventListener('keydown', closeToastWithESC);
   }, []);

   return(
      <div 
         className={`${baseClass}Toast-Message-Container ${positionY} ${positionX} ${active ? 'toast-has-active' : ''}`}
         data-toast-active={active}
      >
         <div 
            className={`${baseClass}Toast-Message-Content ${toastType}`}
            title={message}
            aria-label="Toast Message"
         >
         <p>{message}</p>

         <button
            aria-label="Close Toast"
            title="Fechar Toast"
            onClick={handleRemoveToast}
         >
            <AiOutlineClose 
               size={15}
               color={colors.black}
            />
         </button>
         </div>
      </div>
   );
};