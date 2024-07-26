import { useReducer } from 'react';

import { SliderReducerActions, SliderReducerValues } from '../types';

const intialState: SliderReducerValues = { 
   quantity: 0,
   currentIndex: 0
};

const dispatch = (state: SliderReducerValues, action: SliderReducerActions) => {
   switch(action.type) {
      case 'SET_TOTAL_SLIDES_QUANTITY':
         return {
            ...state,
            quantity: action.params.quantity
         }
      case 'SET_CHANGE_SLIDE':
         return {
            ...state,
            currentIndex: action.params.slide
         };
      default:
         return state;
   }
};

export const useSliderReducer = () => useReducer(dispatch, intialState);