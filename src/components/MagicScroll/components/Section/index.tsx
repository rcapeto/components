import { FunctionComponent, cloneElement, ReactElement } from 'react';
import { classes } from '../../../../config/class';

import { PositionType, SizeType } from '../../types';
import styles from './styles.module.scss';

interface SectionProps {
   position: PositionType;
   section: ReactElement;
   size: SizeType;
   animated: boolean;
};

export const Section: FunctionComponent<SectionProps> = ({ section, position, size, animated }) => {
   const baseClass = classes.base;

   return(
      <div 
         className={`${styles.sectionContainer} ${baseClass}--section-container ${animated ? styles.isAnimated : ''}`} 
         data-magicscroll-section-size={size} 
         data-magicscroll-section
      >
         <div className={styles.sectionContent} data-magicscroll-section-position={position}>
            { cloneElement(section, { ...section.props }) }
         </div>
      </div>
   );
};