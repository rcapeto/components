import { Children, FunctionComponent, ReactElement, useEffect, useCallback } from 'react';

import { MagicScrollProps, SizeType, PositionType } from './types';
import { Section } from './components/Section';
import { controlSectionsState } from './utils';
import { useDOM } from '../../hooks/useDomManipulation';
import { classes } from '../../config/class';

export type MagicScrollType = SizeType;
export type MagicScrollPositionType = PositionType;

export const MagicScroll: FunctionComponent<MagicScrollProps> = ({ 
   size = 'md',
   children,
   position = 'between-top-middle',
   animated = true
}) => {
   const baseClass = classes.base;

   const { elementInViewport } = useDOM();
   const sections = Children.toArray(children) as ReactElement[];

   const handleControlSections = useCallback(() => {
      const htmlSections = document.querySelectorAll('[data-magicscroll-section]') as NodeListOf<HTMLDivElement>;
      htmlSections && controlSectionsState(htmlSections, elementInViewport);
   }, [elementInViewport]);

   useEffect(() => {
     window.addEventListener('scroll', handleControlSections);
     return () => window.removeEventListener('scroll', handleControlSections);
   }, [handleControlSections]);

   return(
      <div className={`${baseClass}--magicscroll-container magicscroll-container`}>
         {
            sections.map((section, index) => (
               <Section 
                  section={section} 
                  position={position} 
                  key={String(index)}
                  size={size}
                  animated={animated}
               />
            ))
         }
      </div>
   );
};