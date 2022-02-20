import React, { FunctionComponent, MouseEvent } from 'react';
import { GrFormClose } from 'react-icons/gr';

import { classes } from '../../../../config/class';
import { colors } from '../../../../config/colors';
import { useStories } from '../../context';
import './styles.scss';

export const ActiveStory: FunctionComponent = () => {
   const baseClass = classes.base;
   const { 
      active, 
      totalStories,
      activeItemIndex,
      activeStoryIndex,
      storyItems,
      closeModalWrapper,
      storiesDelay,
      nextStory,
      prevStory
   } = useStories();

   const closeModal = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const father = target.closest('[data-story-content]');
      !father && closeModalWrapper();
   };

   return(
      <div
         data-story-overlay
         aria-label="Modal Story"
         className={`${baseClass}ActiveStory-Overlay ${active ? 'is--active' : ''}`}
         onClick={closeModal}
      >
         <div
            data-story-content
            className={`${baseClass}ActiveStory-Content`}
         >
            <div
               className={`${baseClass}CloseButton-Container`}
               data-close-mobile-button
               onClick={closeModalWrapper}
            >  
               <GrFormClose color={colors.black} size={20} />
            </div>
            <div className={`${baseClass}Quantity-Container`}>
               {
                  Array.from({ length: totalStories }, (_, index) => (
                     <div
                        className={`percentual-container ${activeStoryIndex === index ? 'is--active' : ''}`}
                        style={{ width: `${(1/totalStories) * 100}%`}}
                        key={String(index)}
                     >
                        <div 
                           style={{ animationDuration: `${storiesDelay}ms` }}
                           className="percentual"
                        />  
                     </div>
                  ))
               }
            </div>

            {
               activeItemIndex >= 0 && storyItems[activeItemIndex].stories.map((story, index) => (
                  <div
                     className={`${baseClass}ActiveStory-Story ${activeStoryIndex === index ? 'is--active': ''}`}
                     title={story.title}
                     key={String(index)}
                     data-story-index={index}
                     data-story={JSON.stringify(story)}
                  >
                     <img src={story.image} alt={story.altImage} />
                  </div>
               ))
            }

            <div
               className={`${baseClass}ActiveStory-Buttons`}
            >
               <button 
                  onClick={prevStory}
                  data-prev-button
                  aria-label="Voltar Story"
               />
               <button 
                  onClick={nextStory}
                  data-next-button
                  aria-label="Próximo Story"
               />
            </div>
         </div>
      </div>
   );
};