export interface IShareButton {
   textButton?: string;
   message?:string;
   colorPrimary?: string;
   backgroundPrimary?: string;
   colorSecondary?: string;
   backgroundSecondary?: string;
   items?: ShareItem[];
};

export type ShareItem = {
   type: ShareItemType,
   active: boolean,
   title: string,
};

export type ShareItemType = 
   'whatsapp' | 
   'facebook' | 
   'twitter' | 
   'pinterest' | 
   'email' | 
   'telegram' | 
   'linkedin'