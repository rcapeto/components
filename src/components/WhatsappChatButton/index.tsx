import React, { FunctionComponent } from 'react';

import { classes } from '../../config/class';
import { colors } from '../../config/colors';
import { IWhatsappChat } from '../WhatsappChatButton/types';
import './styles.scss';
import { FaWhatsapp } from "react-icons/fa";

export type WhatsappChatProps = IWhatsappChat;

export const WhatsappChat: FunctionComponent<WhatsappChatProps> = ({
   message = 'Preciso de ajuda',
   visible = true,
   position = 'bottom-right'
}) => {
   const baseClass = classes.baseG;
   const title = encodeURIComponent(document.title) || '';

   // const url = window.location.href;
   const url = 'https://google.com.br';

   const whatsappChatClient = () => {
      window.open(`https://api.whatsapp.com/send?text=${message}: ${title} - \nurl: ${url}`,
         'facebook-share-dialog',
         'width=800,height=600'
      );
      return false;
   }

   return (
      <>
      {visible && 
         <div
            className={`${baseClass}WhatsappChat-wrap`}
            aria-label="Botão de Ajuda Whatsapp"
            title='Whatsapp Chat'
         >
            <div
               className={`${baseClass}WhatsappChat-Container`}

            >
               <i onClick={whatsappChatClient} title='Whatsapp'><FaWhatsapp /></i>
            </div>
         </div>
      }
      </>
   );
};