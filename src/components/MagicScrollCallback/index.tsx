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
import { MagicScroll } from '../MagicScroll';
import { MagicScrollPositionType, MagicScrollType } from '../MagicScroll';
import { elementClassManipulate, elementHasClass } from '../../utils/element';

import './styles.scss';

type Callback = (progress: number) => ReactNode[];

interface Props {
   children: ReactNode | Callback;
   size?: number;
   contentPosition?: 'middle' | 'top' | 'bottom' | 'between-top-middle';
   magicScrollWithoutCallbackConfig?: {
      position: MagicScrollPositionType,
      animated: boolean;
      size: MagicScrollType,
   }
};

export type MagicScrollCallbackProps = Props;

export const MagicScrollCallback: FunctionComponent<Props> = ({ 
   children,
   contentPosition = 'middle',
   size = 4000,
   magicScrollWithoutCallbackConfig
}) => {
   const containerRef = useRef<HTMLDivElement>(null);
   const contentRef = useRef<HTMLDivElement>(null);

   const [progress, setProgress] = useState(0);
   const { elementInViewport } = useDOM();

   const baseClass = classes.base;

   const transformPercentageToDecimal = (percent: string) => +(+percent / 100).toFixed(2);

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
         };

         const containerConfig = {
            top: container.offsetTop,
            bottom: container.getBoundingClientRect().bottom,
            height: container.scrollHeight,
         };

         if(elementInViewport(container)) {
            !elementHasClass(content, contentClasses.inViewPort) &&
               elementClassManipulate(content, 'add', contentClasses.inViewPort)
            ;

            elementHasClass(content, contentClasses.hasCompleted) &&
               elementClassManipulate(content, 'remove', contentClasses.hasCompleted)
            ;

            const currentTopWhenEnterInViewPort = (
               windowConfig.positionBottom - containerConfig.top
            );

            const percent = (
               (currentTopWhenEnterInViewPort * 100) /
               (containerConfig.height + windowConfig.height)
            ).toFixed(2);

            setProgress(transformPercentageToDecimal(percent));
         } else {
            const hasEndContent = containerConfig.bottom <= 0;

            elementHasClass(content, contentClasses.inViewPort) &&
               elementClassManipulate(content, 'remove', contentClasses.inViewPort)
            ;

            if(hasEndContent) {
               !elementHasClass(content, contentClasses.hasCompleted) &&
                  elementClassManipulate(content, 'add', contentClasses.hasCompleted)
               ;
            } else {
               elementHasClass(content, contentClasses.hasCompleted) &&
                  elementClassManipulate(content, 'remove', contentClasses.hasCompleted)
               ;
            }

            setProgress(hasEndContent ? 1 : 0);
         }
      }
   }, [elementInViewport]);

   useEffect(() => {
      window.addEventListener('scroll', updateProgress);
      return () => window.removeEventListener('scroll', updateProgress);
   }, [updateProgress]);

   if(typeof children == 'function') {
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
              { children(progress) }
            </div>
         </div>
      );
   } else {
      return(
         <MagicScroll { ...magicScrollWithoutCallbackConfig }>
            { children }
         </MagicScroll>
      );
   }
};