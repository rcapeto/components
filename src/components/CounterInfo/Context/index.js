import React, { useContext, createContext, useState } from 'react';
import { classes } from '../../../config/class';
// import { ICounterProvider } from '../types';
const CounterContext = createContext({});

// export type CounterProviderProps = ICounterProvider

// export const CounterProvider: FunctionComponent<CounterProviderProps> = ({ 
export const CounterProvider = ({ 
  children,
  initialDate,
  finalDate,
  counterType
}) => {
  const [componentShow, setComponentShow] = useState(true);
  const now = new Date().toISOString();
  const baseClass = classes.baseG;

  if (!counterType || !initialDate || !finalDate) return null;

  const validInitialDate = initialDate <= now;
  const validFinalDate = finalDate >= now;

  if (!validInitialDate || !validFinalDate) return null;

  const filterState = (state) => {
    setComponentShow(state)
  };

  return (
    <CounterContext.Provider
      value={{
        componentShow,
        filterState,
        initialDate,
        finalDate
      }}
    >
      <div className={`${baseClass}bannerOffter`}>
        {children}
      </div>
    </CounterContext.Provider>
  )
};

export const useCounter = () => useContext(CounterContext);
