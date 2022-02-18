import { useContext, createContext, useEffect, FunctionComponent } from 'react';

import { IAnimatedContextValues } from '../types';
import { useAnimatedReducer } from '../reducer';

const AnimatedContext = createContext({} as IAnimatedContextValues);

export const AnimatedProvider: FunctionComponent = ({ children }) => {
   const [state, dispatch] = useAnimatedReducer();

   const handleGetSections = () => {
      const sections = Array.from(document.querySelectorAll('[data-section-animated]') as NodeListOf<HTMLElement>);

      sections.length && 
      dispatch({ type: 'SET_ANIMATED_SECTIONS', params: { animatedSections: sections }})
   };

   const handleScroll = () => {
      dispatch({ type: 'SET_POSITION', params: { currentPositionY: window.scrollY }})
   };

   const handleAddActivedSection = (section: HTMLElement) => {
      dispatch({
         type: 'SET_SECTION_HAS_ACTIVATED',
         params: {
            section
         }
      });
   };

   useEffect(() => {
      handleGetSections();

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
   }, []);

   return(
      <AnimatedContext.Provider
         value={{...state, handleAddActivedSection }}
      >
         { children }
      </AnimatedContext.Provider>
   );
};

export const useAnimatedSection = () => useContext(AnimatedContext);