import { ReactNode } from 'react';

import styles from './styles.module.scss';

interface IconProps {
   children: ReactNode;
}

export function Icon(props: IconProps) {
   return(
      <div className={styles.iconContainer}>
         { props.children }
      </div>
   );
}