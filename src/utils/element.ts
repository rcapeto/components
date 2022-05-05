export const elementClassManipulate = (
   element: HTMLElement,
   type: 'add' | 'remove',
   className: string
) => {
   element.classList[type](className);
};

export const elementHasClass = (element: HTMLElement, className: string): boolean => {
   return element.classList.contains(className);
}

export const elementManipulateAttribute = (
   element: HTMLElement, 
   type: 'remove' | 'add', 
   attribute: string,
   value?: string
) => {
   switch(type) {
      case 'add':
         value && element.setAttribute(attribute, value);
         break;
      case 'remove':
         element.removeAttribute(attribute);
         break;
      default:
         break;
   }
};