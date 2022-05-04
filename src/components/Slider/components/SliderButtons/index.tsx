import { FunctionComponent } from "react";
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';

import { useSlider } from "../../context";

import styles from './styles.module.scss';

export const SliderButtons: FunctionComponent = () => {
   const { nextSlide, prevSlide } = useSlider();

   const buttons = [
      {
         icon: BsArrowLeft, 
         onClick: prevSlide,
         attribute: 'prev-slide',
         title: 'Voltar Slide'
      },
      {
         icon: BsArrowRight, 
         onClick: nextSlide,
         attribute: 'next-slide',
         title: 'Próximo Slide'
      }
   ];

   return(
      <div className={styles.sliderButtonsContainer}>
         {
            buttons.map(({ icon: Icon, attribute, onClick, title }, index) => (
               <button 
                  onClick={onClick} 
                  data-button-action={attribute} 
                  title={title}
                  key={String(index)}
               >
                  <Icon color="#000" size={18} />
               </button>
            ))
         }
      </div>
   );
};