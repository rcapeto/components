export interface SliderContextValues extends SliderReducerValues {
   nextSlide: () => void;
   prevSlide: () => void;
   changeSlide: (slideIndex: number) => void;
   showDots: boolean;
   showArrows: boolean;
};

export interface SliderContextProps {
   onChangeSlide?: (slideIndex: number) => void;
   showDots?: boolean;
   showArrows?: boolean;
};

export interface SliderReducerValues {
   quantity: number;
   currentIndex: number;
};

export type SliderReducerActions = 
   { type: 'SET_TOTAL_SLIDES_QUANTITY', params: { quantity: number } } |
   { type: 'SET_CHANGE_SLIDE', params: { slide: number } };

export interface SliderProps {
   onChangeSlide?: (slideIndex: number) => void;
   config?: SliderConfig;
};

export interface SliderConfig {
   showDots?: boolean;
   showArrows?: boolean;
};