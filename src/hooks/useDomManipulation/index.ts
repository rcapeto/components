export const useDOM = () => {
   const elementInViewport = (element: HTMLElement): boolean => {
      //element position
      const elementTop = element.offsetTop;
      const elementBottom = element.getBoundingClientRect().bottom;

      //scroll position
      const scrollTop = window.scrollY; //or .pageYOffset
      const windowBottomPosition = scrollTop + window.innerHeight;

      return (windowBottomPosition > elementTop && elementBottom >= 0);
   };

   const endOfTheScreen = (): boolean => {
      const scrollTop = window.scrollY //or .pageYOffset;
      const windowBottomPosition = scrollTop + window.innerHeight;
      const maxScrollHeight = document.documentElement.scrollHeight;
      
      return (windowBottomPosition === maxScrollHeight);
   };
   
   //nodeType
   /**
    * 1 - elemento
    * 2 - atributo
    * 3 - texto
    * 8 - comentário
    * 10 - DOCTYPE
    */
   /**
    * @param element @HTMLElement
    * @param fnc @callback 
    * @description The element must be the parent of the element that wants to be observed.
    */

   const observerDOM = (element: HTMLElement, fnc: () => void) => {
      if(element && element.nodeType === 1) {
         if(window.MutationObserver) {
            const mutationObserver = new MutationObserver((mutations, observer) => {
               const [mutation] = mutations;
               mutation.addedNodes.length && observer.disconnect(); //parar o disparo (parametro opcional)
               fnc();
            });
            mutationObserver.observe(element, { subtree: true, childList: true });
         } else {
            element.addEventListener('DOMNodeInserted', fnc, false)
            element.addEventListener('DOMNodeRemoved', fnc, false)
         }
      }
   };

   return { elementInViewport, observerDOM, endOfTheScreen };
};