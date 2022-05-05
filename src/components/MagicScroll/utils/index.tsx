import { elementClassManipulate, elementHasClass, elementManipulateAttribute } from '../../../utils/element';

const classes = { inViewPort: 'is-in-viewport', hasSeen: 'has-seen' };

export const controlSectionsState = (
   sections: NodeListOf<HTMLDivElement>,
   elementInViewport: (element: HTMLElement) => boolean
) => {
   for(const section of Array.from(sections)) {
      const windowState = {
         height: window.innerHeight,
         positionBottom: window.scrollY + window.innerHeight,
      };

      const sectionState = {
         top: section.offsetTop,
         bottom: section.getBoundingClientRect().bottom,
         height: section.scrollHeight,
      };

      if(elementInViewport(section)) {
         const currentTopWhenEnterInViewPort = (windowState.positionBottom - sectionState.top);
         const percent = ((currentTopWhenEnterInViewPort * 100) / (sectionState.height + windowState.height)).toFixed(2);

         if(+percent > 0) {
            elementManipulateAttribute(section, 'add', 'data-magicscroll-animate', 'true');
         } 
         
         elementManipulateAttribute(section, 'add', 'data-magicscroll-percent', percent);

         if(!elementHasClass(section, classes.inViewPort)) elementClassManipulate(section, 'add', classes.inViewPort);
         if(elementHasClass(section, classes.hasSeen)) elementClassManipulate(section, 'remove', classes.hasSeen);
      } else {
         if(sectionState.bottom < 0) {
            if(!elementHasClass(section, classes.hasSeen)) {
               elementClassManipulate(section, 'add', classes.hasSeen);
               elementManipulateAttribute(section, 'add', 'data-magicscroll-percent', '100');
            };
         } else {
            elementManipulateAttribute(section, 'remove', 'data-magicscroll-animate');
         }

         if(elementHasClass(section, classes.inViewPort)) elementClassManipulate(section, 'remove', classes.inViewPort)
      }
   }
};