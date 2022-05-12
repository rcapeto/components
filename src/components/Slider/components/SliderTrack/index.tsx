import { cloneElement, FunctionComponent, ReactElement } from "react";

import { useSlider } from '../../context';
import { classes } from "../../../../config/class";
import { SliderButtons } from '../SliderButtons';
import { SliderDots } from "../SliderDots";

import styles from './styles.module.scss';

interface SliderTrack {
   slides: ReactElement[];
};

export const SliderTrack: FunctionComponent<SliderTrack> = ({ slides }) => {
   const { showArrows, showDots, currentIndex } = useSlider();
   const baseClass = classes.base;

   return(
      <div className={`${styles.sliderContainer} ${baseClass}--slider-container`}>
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