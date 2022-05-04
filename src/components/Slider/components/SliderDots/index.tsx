import { FunctionComponent } from 'react';

import { useSlider } from '../../context';

import styles from './styles.module.scss';

export const SliderDots: FunctionComponent = () => {
   const { quantity, currentIndex, changeSlide } = useSlider();
   
   return(
      <div className={styles.dotsContainer}>
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