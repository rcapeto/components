export const useDOM = () => {
   const elementInViewport = (element: HTMLElement): boolean => {
      const scrollTop = window.pageYOffset;
      const elementTop = element.offsetTop;
      const elementBottom = element.getBoundingClientRect().bottom;
      const windowBottomPosition = scrollTop + window.innerHeight;
      const maxScrollHeight = document.documentElement.scrollHeight;
      const maxScreen = windowBottomPosition === maxScrollHeight;
   
      if(maxScreen) console.log('Screen End');
   
      if(windowBottomPosition > elementTop && elementBottom > 0) return true;
      else return false;
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

   return { elementInViewport, observerDOM };
};