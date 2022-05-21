import { 
   FunctionComponent, 
   ReactNode, 
   useState, 
   useRef, 
   useEffect, 
   useCallback,
} from 'react';
import { classes } from '../../config/class';
import { useDOM } from '../../hooks/useDomManipulation';

import './styles.scss';

type Callback = (progress: number) => ReactNode;

interface Props {
   children: ReactNode | Callback;
   size?: number;
   contentPosition?: 'middle' | 'top' | 'bottom' | 'between-top-middle';
};

export const MagicScrollCallback: FunctionComponent<Props> = ({ 
   children,
   contentPosition = 'middle',
   size = 4000,
}) => {
   const containerRef = useRef<HTMLDivElement>(null);
   const contentRef = useRef<HTMLDivElement>(null);

   const [progress, setProgress] = useState(0);
   const { elementInViewport } = useDOM();

   const baseClass = classes.base;

   const transformPercentageToDecimal = (percent: string) => {
      return +(+percent / 100).toFixed(2);
   };

   const updateProgress = useCallback(() => {
      const contentClasses = {
         inViewPort: 'is-in-view-port',
         hasCompleted: 'magic-scroll-has-completed',
      };

      if(containerRef.current && contentRef.current) {
         const container = containerRef.current;
         const content = contentRef.current;

         const windowConfig = {
            positionBottom: window.scrollY + window.innerHeight,
            height: window.innerHeight
         }

         const containerConfig = {
            top: container.offsetTop,
            bottom: container.getBoundingClientRect().bottom,
            height: container.scrollHeight,
         }

         if(elementInViewport(container)) {
            !content.classList.contains(contentClasses.inViewPort) 
               && content.classList.add(contentClasses.inViewPort)
            ;

            content.classList.contains(contentClasses.hasCompleted) 
               && content.classList.remove(contentClasses.hasCompleted)
            ;

            const currentTopWhenEnterInViewPort = (windowConfig.positionBottom - containerConfig.top);
            const percent = (
               (currentTopWhenEnterInViewPort * 100) /
               (containerConfig.height + windowConfig.height)
            ).toFixed(2);

            setProgress(transformPercentageToDecimal(percent));
         } else {
            const hasEndContent = containerConfig.bottom;

            content.classList.contains(contentClasses.inViewPort) 
               && content.classList.remove(contentClasses.inViewPort)
            ;

            if(hasEndContent) {
               !content.classList.contains(contentClasses.hasCompleted) 
                  && content.classList.add(contentClasses.hasCompleted)
               ;
            } else {
               content.classList.contains(contentClasses.hasCompleted) 
                  && content.classList.remove(contentClasses.hasCompleted)
               ;
            }

            setProgress(hasEndContent <= 0 ? 1 : 0);
         }
      }
   }, [elementInViewport]);

   useEffect(() => {
      window.addEventListener('scroll', updateProgress);
      return () => window.removeEventListener('scroll', updateProgress);
   }, [updateProgress]);

   return(
      <div 
         className={`${baseClass}magic-scroll-cb-container`}
         ref={containerRef}
         style={{ height: size }}
      >
         <div 
            className={`${baseClass}magic-scroll-cb-content ${contentPosition}`}
            ref={contentRef}
         >
            {
               typeof children == 'function' ? children(progress) : children
            }
         </div>
      </div>
   );
};