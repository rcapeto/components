import { FunctionComponent } from 'react';

import { useSlider } from '../../context';
import { classes } from '../../../../config/class';

import styles from './styles.module.scss';

export const SliderDots: FunctionComponent = () => {
   const { quantity, currentIndex, changeSlide } = useSlider();
   const baseClass = classes.base;
   
   return(
      <div className={`${styles.dotsContainer} ${baseClass}--dots-container`}>
         {
            Array.from({ length: quantity }).map((_, index) => (
               <span 
                  data-from-slide-index={index}
                  className={`${styles.dot} ${index === currentIndex ? styles.isActive : ''}`}
                  data-is-active={index === currentIndex}
                  key={String(index)}
                  onClick={() => changeSlide(index)}
               />
            ))
         }
      </div>
   );
};