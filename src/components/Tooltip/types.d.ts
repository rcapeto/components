export interface TooltipProps {
   backgroundColor?: string;
   textColor?: string;
   label: string;
   delay?: number;
};

export interface TooltipPopupProps {
   backgroundColor: string;
   textColor: string;
   label: string;
   delay: number;
   active: boolean;
   left: string;
   top: string;
};