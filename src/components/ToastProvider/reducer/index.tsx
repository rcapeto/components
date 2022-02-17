import { useReducer } from 'react';

import { IToastActions, IToastState } from '../types';

const initialState: IToastState = {
   active: true,
   message: 'Show Toast Message Here',
   toastType: 'info'
}; 

const dispatchToast = (
   state: IToastState,
   action: IToastActions
) => {
   switch(action.type) {
      case 'SET_TOAST_CONFIG':
         return {
            ...state,
            ...action.payload.toastState
         }
      case 'TOGGLE_TOAST_ACTIVE':
         return {
            ...state,
            active: !state.active
         }
      default:
         return state;
   }
};

export const useToastReducer = () => useReducer(dispatchToast, initialState);