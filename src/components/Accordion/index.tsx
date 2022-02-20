import React, { FunctionComponent, useState } from 'react';
import { BiChevronRight } from 'react-icons/bi';

import { classes } from '../../config/class';
import { IAccordion } from './types';

import './styles.scss';
import { colors } from '../../config/colors';

export type AccordionProps = IAccordion;

export const Accordion: FunctionComponent<IAccordion> = ({ title, description }) => {
   const [active, setActive] = useState(false);

   const baseClass = classes.base;

   return(
      <div
         className={`${baseClass}Accordion-Container ${active ? 'is--active' : ''}`}
         data-accordion
         data-accordion-title={title}
         data-accordion-description={description}
         data-accordion-active={active}
      >
         <div
            className={`${baseClass}Accordion-Header`}
            onClick={() => setActive(!active)}
         >
            <h5 title={title}>{title}</h5>
            <BiChevronRight color={colors.white} size={20} />
         </div>
         <div
            className={`${baseClass}Accordion-Content`}
         >
            <p title={description}>
               {description}
            </p>
         </div>
      </div>
   );
};