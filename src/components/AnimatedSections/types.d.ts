export interface IAnimatedSection {
   sectionID?: string;
   sectionTitle?: string; 
};

export interface IAnimatedSectionsState {
   currentPositionY: number;
   animatedSections: HTMLElement[];
   sectionsActivated: HTMLElement[];
};

export type IAnimatedSectionsActions = 
   { type: 'SET_POSITION', params: { currentPositionY: number }} |
   { type: 'SET_ANIMATED_SECTIONS', params: { animatedSections: HTMLElement[] }} |
   { type: 'SET_SECTION_HAS_ACTIVATED', params: { section: HTMLElement }}

export interface IAnimatedContextValues extends IAnimatedSectionsState {
   handleAddActivedSection: (section: HTMLElement) => void;
};