import { createContext, useContext, FunctionComponent, useEffect } from 'react';

import { IToastProvider, IToastType, IToastValues } from '../types';
import { useToastReducer } from '../reducer';
import { ToastMessage } from '../components/ToastMessage';

const ToastContext = createContext({} as IToastValues);

let timeout: any;

export const ToastProvider: FunctionComponent<IToastProvider> = ({ 
   children,
   props
}) => {
   const [state, dispatch] = useToastReducer();

   const showToast = (
      message: string,
      toastType: IToastType
   ) => {
      dispatch({
         type: 'SET_TOAST_CONFIG',
         payload: {
            toastState: {
               active: true,
               message,
               toastType
            }
         }
      });
   };

   const handleRemoveToast = () => {
      dispatch({ type: 'TOGGLE_TOAST_ACTIVE' });
   };

   useEffect(() => {
      // if(state.active) {
      //    timeout = setTimeout(handleRemoveToast, 5000);
      // } else {
      //    clearTimeout(timeout);
      // }
   }, [state.active]);

   return(
      <ToastContext.Provider
         value={{
            ...state, 
            positionY: props ? props.positionY : 'top', 
            positionX: props? props.positionX : 'right',
            showToast, 
            handleRemoveToast 
         }}
      >
         <ToastMessage />
         { children }
      </ToastContext.Provider>
   );
};

export const useToast = () => useContext(ToastContext);