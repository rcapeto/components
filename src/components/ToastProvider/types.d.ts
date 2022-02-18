
export interface IToastProvider {
   props?: Props;
};

interface Props {
   positionX: 'left' | 'right';
   positionY: 'top' | 'bottom';
};

export interface IToastValues extends IToastState {
   showToast: (message: string, toastType: IToastType) => void;
   positionX: 'left' | 'right';
   positionY: 'top' | 'bottom';
   handleRemoveToast: () => void;
};

export type IToastType = 'success' | 'error' | 'info' | 'warning';

export interface IToastState {
   message: string;
   toastType: IToastType;
   active: boolean;
};


export type IToastActions = 
   { type: 'SET_TOAST_CONFIG', payload: { toastState: IToastState }} |
   { type: 'TOGGLE_TOAST_ACTIVE' }