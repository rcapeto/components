import { createContext, FunctionComponent, useContext, useEffect, useCallback, Children, ReactElement } from 'react';

import { SliderContextValues, SliderContextProps } from '../types';
import { useSliderReducer } from '../reducer';
import { SliderTrack } from '../components/SliderTrack';

const SliderContext = createContext({} as SliderContextValues);

export const SliderProvider: FunctionComponent<SliderContextProps> = ({ 
   children, 
   onChangeSlide,
   showArrows = true,
   showDots = true
}) => {
   const [state, dispatchState] = useSliderReducer();
   const slides = Children.toArray(children) as ReactElement[];

   const nextSlide = useCallback(() => {
      const slideIndex = state.currentIndex;
      const index = (slideIndex + 1 < state.quantity) ? slideIndex + 1 : 0;

      changeSlide(index);
      onChangeSlide && onChangeSlide(index);

   }, [state.quantity, state.currentIndex]);

   const prevSlide = useCallback(() => {
      const slideIndex = state.currentIndex;
      const index = (slideIndex - 1 >= 0) ? slideIndex - 1 : state.quantity - 1;
      
      changeSlide(index);
      onChangeSlide && onChangeSlide(index);
   }, [state.quantity, state.currentIndex]);

   const changeSlide = useCallback((slide: number) => {
      dispatchState({ type: 'SET_CHANGE_SLIDE', params: { slide }});
   }, []);

   const formatSlide = useCallback((slideIndex: number) => {
      const slidesHTML = document.querySelectorAll('[data-slide]') as NodeListOf<HTMLElement>;

      slidesHTML.forEach((slide, index) => {
         slide.style.transform = `translateX(${100 * (index - slideIndex)}%)`;
      });
   }, []);

   useEffect(() => {
      dispatchState({ type: 'SET_TOTAL_SLIDES_QUANTITY', params: { quantity: slides.length }})
   }, []);

   useEffect(() => {
      formatSlide(state.currentIndex);
   }, [state.currentIndex]);

   return(
      <SliderContext.Provider 
         value={{...state, nextSlide, prevSlide, showArrows, showDots, changeSlide }}
      >
         <SliderTrack slides={slides}/>
      </SliderContext.Provider>
   );
};

export const useSlider = () => useContext(SliderContext);