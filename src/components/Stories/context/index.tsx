import React, { FunctionComponent, useEffect, useContext, createContext } from 'react';

import { IStoryProps, IStoryContextValues } from '../types';
import { useStoriesReducer } from '../reducer';

const StoriesContext = createContext({} as IStoryContextValues);

let storyAutomaticInterval: any;

export const StoriesWrapper: FunctionComponent<IStoryProps> = ({ 
   children,
   storyItems,
   autoStories = true,
   storiesDelay = 4775
}) => {
   const [state, dispatch] = useStoriesReducer();

   const preloadImages = () => {
      const images: string[] = [];

      for(const storyItem of storyItems) {
         const storyImages = storyItem.stories.map(story => story.image);
         images.push(storyItem.mainImage, ...storyImages);
      }

      for(const image of images) {
         const htmlImage = new Image();
         htmlImage.src = image;
      }
   };

   const nextStory = () => {
      if(!state.active) return;

      const indexStory = state.activeStoryIndex;

      if(indexStory + 1 >= state.totalStories) {
         updateWatchedStorys(state.activeItemIndex);
         toggleActiveStories();

      } else {
         dispatch({ type: 'NEXT_STORY' });
      }
   };

   const prevStory = () => {
      if(!state.active) return;

      const indexStory = state.activeStoryIndex;

      if(indexStory - 1 > 0) {
         dispatch({ type: 'PREV_STORY' });
      } else {
         updateStoryIndex(-1);
      }
   };

   const toggleActiveStories = () => {
      dispatch({ type: 'TOGGLE_ACTIVE' });
   };

   const updateCurrentActiveItem = (index: number) => {
      dispatch({
         type: 'SET_ACTIVE_ITEM_INDEX',
         params: { activeItemIndex: index }
      });

      if(index >= 0) {
         updateTotalStories(storyItems[index].stories.length);
      }
      toggleActiveStories();
      updateStoryIndex(0);
   };

   const autoStory = () => {
      storyAutomaticInterval && clearInterval(storyAutomaticInterval);
      storyAutomaticInterval = setInterval(nextStory, storiesDelay);
   };

   const stopAutomaticStories = () => {
      storyAutomaticInterval && clearInterval(storyAutomaticInterval);
   };

   const updateWatchedStorys = (index: number) => {
      dispatch({
         type: 'ADD_WATCHED_STORY_INDEX',
         params: { storyIndex: index }
      });
   };

   const closeModalWrapper = () => {
      stopAutomaticStories();
      toggleActiveStories();
   };

   const updateStoryIndex = (index: number) => {
      dispatch({ 
         type: 'SET_ACTIVE_STORY_INDEX',
         params: { activeStoryIndex: index }
      });
   };

   const updateTotalStories = (totalStories: number) => {
      dispatch({
         type: 'SET_TOTAL_STORIES',
         params: { totalStories }
      });
   };

   useEffect(() => {
      preloadImages();
   }, []);

   useEffect(() => {
      if(state.activeStoryIndex === -1) {
         updateStoryIndex(0);
      };

      if(state.active) {
         autoStories && autoStory();
      } else {
         updateStoryIndex(0);
         stopAutomaticStories();
      }
   }, [state.activeStoryIndex, state.active]);

   useEffect(() => {
      console.log("state.activeStoryIndex", state.activeStoryIndex)
   }, [ state.activeStoryIndex ]);

   return(
      <StoriesContext.Provider 
         value={{
            ...state,
            storyItems,
            autoStories,
            storiesDelay,
            nextStory,
            prevStory,
            toggleActiveStories,
            updateCurrentActiveItem,
            closeModalWrapper
         }}
      >
         { children }
      </StoriesContext.Provider>
   );
};

export const useStories = () => useContext(StoriesContext);