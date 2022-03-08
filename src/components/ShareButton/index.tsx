import React, { FunctionComponent } from 'react';

import { classes } from '../../config/class';
import { colors } from '../../config/colors';
import { IShareButton } from '../ShareButton/types';
import './styles.scss';
import { FaShareAlt, FaFacebookF, FaTwitter, FaTelegramPlane, FaEnvelope, FaLinkedinIn, FaWhatsapp, FaPinterestP } from "react-icons/fa";

export type ShareButtonProps = IShareButton;

export const ShareButton: FunctionComponent<ShareButtonProps> = ({
   textButton = 'Compartilhar',
   message = 'Confira só isso',
   colorPrimary = colors.white,
   backgroundPrimary = colors.black,
   colorSecondary = colors.black,
   backgroundSecondary = colors.grayLine,
   facebook = false,
   twitter = false,
   pinterest = false,
   linkedin = false,
   email = false,
   telegram = false,
   whatsapp = false,
}) => {
   const baseClass = classes.baseG;
   const title = encodeURIComponent(document.title) || '';

   const url = window.location.href;
   // const url = 'https://google.com.br';

   const shareFacebook = () => {
      window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`,
         'facebook-share-dialog',
         'width=800,height=600'
      );
      return false;
   }
   const shareTwitter = () => {
      window.open(`https://twitter.com/intent/tweet?text=${message}: ${title} - \nurl: &url=${url}`,
         'facebook-share-dialog',
         'width=800,height=600'
      );
      return false;
   }
   const sharePinterest = () => {
      window.open(`http://pinterest.com/pin/create/bookmarklet/?url=${url}&is_video=false&description=${message}: ${title}`,
         'facebook-share-dialog',
         'width=800,height=600'
      );
      return false;
   }
   const shareLinkedinIn = () => {
      window.open(`https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${title}&summary=${message}: ${title}`,
         'facebook-share-dialog',
         'width=800,height=600'
      );
      return false;
   }
   const shareTelegram = () => {
      window.open(`https://t.me/share/url?url=${url}&text=${message}: ${title}`,
         'facebook-share-dialog',
         'width=800,height=600'
      );
      return false;
   }
   const shareWhatsapp = () => {
      window.open(`https://api.whatsapp.com/send?text=${message}: ${title} - \nurl: ${url}`,
         'facebook-share-dialog',
         'width=800,height=600'
      );
      return false;
   }
   const shareEmail = () => {
      window.open(`mailto:?subject=${title}&body=${message}: ${title} - \nurl: ${url}`);
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
            {facebook && <i onClick={shareFacebook} title='Facebook'><FaFacebookF /></i>}
            {twitter && <i onClick={shareTwitter} title='Twitter'><FaTwitter /></i>}
            {linkedin && <i onClick={shareLinkedinIn} title='LinkedinIn'><FaLinkedinIn /></i>}
            {pinterest && <i onClick={sharePinterest} title='Pinterest'><FaPinterestP /></i>}
            {email && <i onClick={shareEmail} title='Email'><FaEnvelope /></i>}
            {telegram && <i onClick={shareTelegram} title='Telegram'><FaTelegramPlane /></i>}
            {whatsapp && <i onClick={shareWhatsapp} title='Whatsapp'><FaWhatsapp /></i>}
         </div>
      </div>
   );
};