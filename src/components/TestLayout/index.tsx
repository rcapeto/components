import { ReactNode } from 'react';

import styles from './styles.module.scss';

interface TestLayoutProps {
   isDarkMode?: boolean;
   children: ReactNode;
}

export function TestLayout({ isDarkMode, children }: TestLayoutProps) {
   return(
      <div className={`${styles.testContainer} ${isDarkMode ? styles.darkMode : ''}`}>
         { children }
      </div>
   );
}