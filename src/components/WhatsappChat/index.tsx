import React, { FunctionComponent } from 'react';

import { classes } from '../../config/class';
import { IWhatsappChat } from './types';
import './styles.scss';
import { FaWhatsapp } from "react-icons/fa";

export type WhatsappChatProps = IWhatsappChat;

export const WhatsappChat: FunctionComponent<WhatsappChatProps> = ({
   visible = true,
   phone = '5500000000000',
   pulse = true,
   message = 'Preciso de ajuda',
   position = 'bottom-right'
}) => {
   const baseClass = classes.baseG;
   const title = encodeURIComponent(document.title) || '';

   const url = window.location.href;
   // const url = 'https://google.com.br';

   const whatsappChatClient = () => {
      window.open(`https://wa.me/${phone}?text=${message}: ${title} - \nurl: ${url}`,
         'facebook-share-dialog',
         'width=800,height=600'
      );
      return false;
   }

   return (
      <>
         {visible &&
            <div
               className={`${baseClass}WhatsappChat-wrap ${baseClass}${position}`}
               aria-label="Botão de Ajuda Whatsapp"
               title='Ajuda Whatsapp Chat'
            >
               <div
                  className={`${baseClass}WhatsappChat-Container ${pulse ? (baseClass + 'WhatsappChat-Pulse') : ''}`}
                  onClick={whatsappChatClient}
               >
                  <i aria-label="Botão de Ajuda Whatsapp"
                     title='Ajuda Whatsapp Chat'>
                     <FaWhatsapp color='white' size='35px' />
                  </i>
               </div>
            </div>
         }
      </>
   );
};