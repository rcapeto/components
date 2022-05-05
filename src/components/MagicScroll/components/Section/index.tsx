import { FunctionComponent, cloneElement, ReactElement } from 'react';

import { PositionType, SizeType } from '../../types';
import styles from './styles.module.scss';

interface SectionProps {
   position: PositionType;
   section: ReactElement;
   size: SizeType;
   animated: boolean;
};

export const Section: FunctionComponent<SectionProps> = ({ section, position, size, animated }) => {
   return(
      <div 
         className={`${styles.sectionContainer} ${animated ? styles.isAnimated : ''}`} 
         data-magicscroll-section-size={size} 
         data-magicscroll-section
      >
         <div className={styles.sectionContent} data-magicscroll-section-position={position}>
            { cloneElement(section, { ...section.props }) }
         </div>
      </div>
   );
};