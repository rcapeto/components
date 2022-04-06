import React, { FunctionComponent } from 'react';

import { classes } from '../../config/class';
import { colors } from '../../config/colors';
import { IShareButton, ShareItem } from '../ShareButton/types';
import './styles.scss';
import { FaShareAlt } from "react-icons/fa";

import { generateURL, defaultItems, getIcon } from './utils'

export type ShareButtonProps = IShareButton;

export const ShareButton: FunctionComponent<ShareButtonProps> = ({
   textButton = 'Compartilhar',
   message = 'Confira só isso',
   colorPrimary = colors.white,
   backgroundPrimary = colors.black,
   colorSecondary = colors.black,
   backgroundSecondary = colors.grayLine,
   items = defaultItems
}) => {
   const baseClass = classes.baseG;
   const title = encodeURIComponent(document.title) || '';
   const url = window.location.href;
   // const url = 'https://google.com.br';

   const clickElement = (item: ShareItem) => {
      const generatedUrl = generateURL(item, url, message, title)
      window.open(generatedUrl, 'facebook-share-dialog', 'width=800,height=600');
      return false;
   }

   return (
      <div
         className={`${baseClass}ShareButton-wrap`}
         aria-label="Botão de Compartilhamento"
         title={textButton}
         style={{ backgroundColor: backgroundSecondary, color: colorSecondary }}
      >
         <span style={{ backgroundColor: backgroundPrimary, color: colorPrimary }}><FaShareAlt /> {textButton}</span>
         <div
            className={`${baseClass}ShareButton-Container`}

         >
            {
               items.map((item, index) => {
                  if(!item.active) return null;
                  const Icon = getIcon(item.type)

                  return(
                     <i key={String(index)} onClick={() => clickElement(item)}>
                        <Icon />
                     </i>
                  );
               })
            }
           
         </div>
      </div>
   );
};