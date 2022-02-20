import React, { FunctionComponent } from 'react';

import { classes } from '../../../../config/class';
import { useStories } from '../../context';
import './styles.scss';

export const MainContent: FunctionComponent = () => {
   const baseClass = classes.base;
   const { 
      active, 
      activeStoryIndex, 
      activeItemIndex, 
      autoStories, 
      totalStories, 
      storiesDelay, 
      storyItems,
      watchedStories,
      updateCurrentActiveItem
   } = useStories();

   return(
      <div 
         className={`${baseClass}Stories-Container`}
         aria-label="Stories"
         data-active={active}
         data-active-story-index={activeStoryIndex}
         data-active-item-index={activeItemIndex}
         data-auto-story-actived={autoStories}
         data-total-stories={totalStories}
         data-stories-delay={storiesDelay}
      >
         {
            storyItems.map((item, index) => (
               <div
                  className={`${baseClass}Story-Item-Container`}
                  key={String(index)}
                  data-item-index={index}
                  data-total-stories={item.stories.length}
                  data-was-watched={watchedStories.includes(index)}
               >
                  <img 
                     src={item.mainImage} 
                     alt={item.title} 
                     title={`Stories quantity: ${item.stories.length}`}
                     className={watchedStories.includes(index) ? 'was--watched' : ''}
                     onClick={() => updateCurrentActiveItem(index)}
                  />

                  <h3>{item.title}</h3>
               </div>
            ))
         }
      </div>
   );
};