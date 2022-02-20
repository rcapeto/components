import React, { FunctionComponent, useEffect } from 'react';

import { IFaqItem, IFaqProps } from './types';
import { Accordion } from '../Accordion';
import { classes } from '../../config/class';

export type FAQProps = IFaqProps;
export type FAQItem = IFaqItem;

export const FAQ: FunctionComponent<IFaqProps> = ({ 
   insertInHeadTag = true,
   items
}) => {
   const baseClass = classes.base;

   const insertInMetaTAG = () => {
      const FAQSchema = items.map((item) => ({
         "@type": "Question",
         name: item.question,
         acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
         }
      }));

      const JSONContent = {
         "@context": "https://schema.org",
         "@type": "FAQPage",
         mainEntity: FAQSchema,
       };

       const script = `
         <script type="application/ld+json">
            ${JSON.stringify(JSONContent)}
         </script>
      `;

      document.head.insertAdjacentHTML('beforeend', script);
   };

   useEffect(() => {
      insertInHeadTag && insertInMetaTAG();
   }, []);

   return(
      <div className={`${baseClass}FAQ-Container`} data-faq-items={items.length}>
         {
            items.map((item, index) => (
               <div
                  key={String(index)}
                  data-faq-item-index={index}
                  data-faq-question={item.question}
                  data-faq-answer={item.answer}
               >
                  <Accordion title={item.question} description={item.answer}/>
               </div>
            ))
         }
      </div>
   );
};