import { FunctionComponent } from 'react';

import { SliderProvider } from './context';
import { SliderProps, SliderConfig as Config } from './types';

export type SliderConfig = Config;

export const Slider: FunctionComponent<SliderProps> = ({ onChangeSlide, children, config }) => {
   return(
      <SliderProvider onChangeSlide={onChangeSlide} {...config} >
         { children }
      </SliderProvider>
   );
};