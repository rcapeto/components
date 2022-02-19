export interface INumericStep {
   size?: 'small' | 'medium' | 'large';
   onChangeNumber?: (currentNumber: number) => void;
   limit?: number;
};