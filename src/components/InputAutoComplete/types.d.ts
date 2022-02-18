import { InputHTMLAttributes } from 'react';

export interface IAutoCompleteInput {
   inputAttr?: InputHTMLAttributes<HTMLInputElement>,
   items: Item[];
   onSelectedItem?: (item: Item) => void;
   onRemoveItem?: (item: Item) => void; 
};

export interface Item<V = {}> {
   label: string;
   value: V;
};