export interface IWhatsappChat {
   visible:boolean;
   phone:string;
   pulse?:boolean;
   message?:string;
   position?:PositionType;
};

type PositionType = 
   'bottom-right' | 
   'bottom-left' | 
   'bottom-center' |
   'top-right' | 
   'top-left' | 
   'top-center' |
   'center'