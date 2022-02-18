import { useReducer } from 'react';
import { IAnimatedSectionsActions, IAnimatedSectionsState } from '../types';

const initialState: IAnimatedSectionsState = {
   animatedSections: [],
   currentPositionY: 0,
   sectionsActivated: []
};

const dispatch = (
   state: IAnimatedSectionsState,
   action: IAnimatedSectionsActions
) => {
   switch(action.type) {
      case 'SET_ANIMATED_SECTIONS':
         return {
            ...state,
            animatedSections: action.params.animatedSections
         }
      case 'SET_POSITION':
         return {
            ...state,
            currentPositionY: action.params.currentPositionY
         }
      case 'SET_SECTION_HAS_ACTIVATED':
         return {
            ...state,
            sectionsActivated: [...state.sectionsActivated, action.params.section]
         }
      default:
         return state;
   }
};

export const useAnimatedReducer = () => useReducer(dispatch, initialState);