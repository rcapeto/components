export interface IStoryProps {
   storyItems: IStoryItem[];
   autoStories?: boolean;
   storiesDelay?: number;
};

export interface IStoryItem {
   mainImage: string;
   title: string;
   stories: IStory[];
};

export interface IStory {
   image: string;
   title: string;
   altImage: string;
};

export interface IStoryContextValues extends IStoryState, IStoryProps {
   storyItems: IStoryItem[];
   nextStory: () => void;
   prevStory: () => void;
   toggleActiveStories: () => void;
   updateCurrentActiveItem: (index: number) => void;
   closeModalWrapper: () => void;
};

export interface IStoryState {
   activeItemIndex: number;
   activeStoryIndex: number;
   totalStories: number;
   watchedStories: number[];
   active: boolean;
};

export type IStoryActions = 
   { type: 'NEXT_STORY' } | 
   { type: 'PREV_STORY' } | 
   { type: 'SET_TOTAL_STORIES', params: { totalStories: number } } | 
   { type: 'SET_ACTIVE_ITEM_INDEX', params: { activeItemIndex: number } } | 
   { type: 'SET_ACTIVE_STORY_INDEX', params: { activeStoryIndex: number } } | 
   { type: 'ADD_WATCHED_STORY_INDEX', params: { storyIndex: number } } | 
   { type: 'SET_TOTAL_STORIES', params: { totalStories: number } } | 
   { type: 'TOGGLE_ACTIVE' } 