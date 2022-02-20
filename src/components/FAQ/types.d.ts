export interface IFaqProps {
   items: IFaqItem[];
   insertInHeadTag?: boolean;
};

export interface IFaqItem {
   question: string;
   answer: string;
};