import { useReducer } from 'react';

import { IStoryActions, IStoryState } from '../types';

const initialState: IStoryState = {
   active: false,
   activeItemIndex: -1,
   activeStoryIndex: 0,
   totalStories: 0,
   watchedStories: []
};

const dispatch = (
   state: IStoryState,
   action: IStoryActions
) => {
   switch(action.type) {
      case 'NEXT_STORY':
         return {
            ...state,
            activeStoryIndex: state.activeStoryIndex + 1,
         }
      case 'PREV_STORY':
         return {
            ...state,
            activeStoryIndex: state.activeStoryIndex - 1,
         }
      case 'ADD_WATCHED_STORY_INDEX':
         return {
            ...state,
            watchedStories: [...state.watchedStories, action.params.storyIndex]
         }
      case 'SET_ACTIVE_ITEM_INDEX':
         return {
            ...state,
            activeItemIndex: action.params.activeItemIndex,
         }
      case 'SET_ACTIVE_STORY_INDEX':
         return {
            ...state,
            activeStoryIndex: action.params.activeStoryIndex
         }
      case 'SET_TOTAL_STORIES':
         return {
            ...state,
            totalStories: action.params.totalStories
         }
      case 'TOGGLE_ACTIVE':
         return {
            ...state,
            active: !state.active
         }
      default: 
         return state;
   }
};


export const useStoriesReducer = () => useReducer(dispatch, initialState);