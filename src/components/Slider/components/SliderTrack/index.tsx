import { cloneElement, FunctionComponent, ReactElement } from "react";

import { useSlider } from '../../context';
import { SliderButtons } from '../SliderButtons';
import { SliderDots } from "../SliderDots";

import styles from './styles.module.scss';

interface SliderTrack {
   slides: ReactElement[];
};

export const SliderTrack: FunctionComponent<SliderTrack> = ({ slides }) => {
   const { showArrows, showDots, currentIndex } = useSlider();

   return(
      <div className={styles.sliderContainer}>
         { showArrows && <SliderButtons /> }

         {
            slides.map((slide, index) => (
               <div 
                  className={`${styles.slideContainer} ${index === currentIndex ? 'slide-is-visible' : ''}`} 
                  key={String(index)} 
                  data-slide
                  data-slide-index={index}
                  data-slide-visible={index === currentIndex}
               >
                  { cloneElement(slide, { ...slide.props }) }
               </div>
            ))
         }

         { showDots && <SliderDots /> }
      </div>
   );
};