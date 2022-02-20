import { FunctionComponent } from 'react';

import { MainContent } from './components/MainContent';
import { StoriesWrapper } from './context';
import { ActiveStory } from './components/ActiveStory';
import { IStoryItem, IStoryProps } from './types';

export type StoryProps = IStoryProps;
export type StoryItem = IStoryItem;

export const Stories: FunctionComponent<IStoryProps> = props => {
   return(
      <StoriesWrapper {...props}>
         <ActiveStory />
         <MainContent />
      </StoriesWrapper>
   );
};