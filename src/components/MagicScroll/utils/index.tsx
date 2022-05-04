const classes = { inViewPort: 'is-in-viewport', hasSeen: 'has-seen' };

export const controlSectionsState = (sections: NodeListOf<HTMLDivElement>) => {
   for(const section of Array.from(sections)) {
      const currentPositionY = window.scrollY;
      const currentPositionBottom = currentPositionY + window.innerHeight;

      const sectionTopPosition = section.offsetTop; 
      const sectionBottomPosition = section.getBoundingClientRect().bottom;

      if(currentPositionBottom >= sectionTopPosition && sectionBottomPosition >= 0) {
         if(!section.classList.contains(classes.inViewPort)) 
            section.classList.add(classes.inViewPort);
         if(section.classList.contains(classes.hasSeen)) 
            section.classList.remove(classes.hasSeen);
      } else {
         if(sectionBottomPosition < 0) {
            if(!section.classList.contains(classes.hasSeen)) 
               section.classList.add(classes.hasSeen);
         }

         if(section.classList.contains(classes.inViewPort)) 
            section.classList.remove(classes.inViewPort);
      }
   }
};