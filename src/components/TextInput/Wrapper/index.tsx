import { ReactNode } from 'react';

import styles from './styles.module.scss';

interface WrapperProps {
   children: ReactNode;
   inputHasError?: boolean;
};

export function Wrapper(props: WrapperProps) {
   return(
      <div className={`${styles.wrapperContainer} ${props.inputHasError ? styles.hasError : ''}`}>
         { props.children }
      </div>
   );
}