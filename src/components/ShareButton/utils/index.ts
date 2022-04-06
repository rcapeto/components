import { 
   FaFacebookF, 
   FaTwitter, 
   FaTelegramPlane, 
   FaEnvelope, 
   FaLinkedinIn, 
   FaWhatsapp, 
   FaPinterestP,
} from "react-icons/fa";
import { IconType } from 'react-icons';
import { ShareItemType, ShareItem } from "../types";

export const defaultItems: ShareItem[] = [
   {
      active: true,
      title: 'WhatsApp',
      type: 'whatsapp'
   },
   {
      active: true,
      title: 'Facebook',
      type: 'facebook'
   },
   {
      active: true,
      title: 'Linkedin',
      type: 'linkedin'
   },
   {
      active: true,
      title: 'Pinterest',
      type: 'pinterest'
   },
   {
      active: true,
      title: 'Telegram',
      type: 'telegram'
   },
   {
      active: true,
      title: 'Twitter',
      type: 'twitter'
   },
   {
      active: true,
      title: 'Email',
      type: 'email'
   }
];

const Icons: Record<ShareItemType, IconType> = {
   'email': FaEnvelope,
   'facebook': FaFacebookF,
   'linkedin': FaLinkedinIn,
   'pinterest': FaPinterestP,
   'telegram': FaTelegramPlane,
   'twitter': FaTwitter,
   'whatsapp': FaWhatsapp
}

export const generateURL = (
   item: ShareItem,
   url: string,
   message: string,
   title: string
): string => {
   switch (item.type) {
      case 'whatsapp':
         return `https://api.whatsapp.com/send?text=${message}: ${title} - \nurl: ${url}`;
      case 'facebook':
         return `https://www.facebook.com/sharer/sharer.php?u=${url}`
      case 'twitter':
         return `https://twitter.com/intent/tweet?text=${message}: ${title} - \nurl: &url=${url}`
      case 'pinterest':
         return `http://pinterest.com/pin/create/bookmarklet/?url=${url}&is_video=false&description=${message}: ${title}`
      case 'linkedin':
         return `https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${title}&summary=${message}: ${title}`
      case 'telegram':
         return `https://t.me/share/url?url=${url}&text=${message}: ${title}`;
      case 'email':
         return `mailto:?subject=${title}&body=${message}: ${title} - \nurl: ${url}`
      default:
         return '';
   }
};

export const getIcon = (type: ShareItemType) => {
   const Icon = Icons[type];
   return Icon;
};