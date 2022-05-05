import { FunctionComponent, cloneElement, ReactElement } from 'react';

import { PositionType, SizeType } from '../../types';
import styles from './styles.module.scss';

interface SectionProps {
   position: PositionType;
   section: ReactElement;
   size: SizeType;
};

export const Section: FunctionComponent<SectionProps> = ({ section, position, size }) => {
   return(
      <div className={styles.sectionContainer} data-magicscroll-section-size={size} data-magicscroll-section>
         <div className={styles.sectionContent} data-magicscroll-section-position={position}>
            { cloneElement(section, { ...section.props }) }
         </div>
      </div>
   );
};