import { FunctionComponent, useState, useEffect, useRef } from 'react';
import { classes } from '../../../config/class';

import { IAnimatedSection } from '../types';
import { useAnimatedSection } from '../context';
import './styles.scss';

export const AnimatedSection: FunctionComponent<IAnimatedSection> = ({
   sectionID = '',
   sectionTitle = '',
   children
}) => {
   const [active, setActive] = useState<boolean>(false);
   const sectionRef = useRef<HTMLDivElement>(null);

   const { handleAddActivedSection, currentPositionY } = useAnimatedSection();

   useEffect(() => {
      const section = sectionRef.current;

      if(section && !active) {
         const hasAppear = (currentPositionY + window.innerHeight) - 65>= section.offsetTop;
         
         if(hasAppear) {
            setActive(hasAppear);
            handleAddActivedSection(section);
         }
      }
   }, [currentPositionY]);

   const baseClass = classes.base;

   return(
      <div
         data-section-animated 
         className={`${baseClass}Animated-Section ${active ? 'has-actived' : ''}`}
         id={sectionID}
         data-has-active={active}
         ref={sectionRef}
      >
         <div className={`${baseClass}Animated-Section-Content`}>
            { sectionTitle && (
               <h3>{sectionTitle}</h3>
            )}
            { children }
         </div>
      </div>
   );
};