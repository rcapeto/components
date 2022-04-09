import React, { FunctionComponent } from 'react';
import { CounterProvider } from './Context';
import { ICounterInfo } from './types';
import Banner from './Banner';
import Stamp from './Stamp';

export type CounterInfoProps = ICounterInfo;

const CounterInfo: FunctionComponent<CounterInfoProps> = ({ 
// const CounterInfo = ({ 
  dataInitial='04/04/2022',
  dataFinal ='08/04/2022 22:17' ,
  counterType = 'stamp' 
}) => {

  const currentDate = (date)=> {
    const [day, month, year] = date.split('/');
    return new Date([month, day, year].join('/'));
  }

  const initialDate = currentDate(dataInitial).toISOString();
  const finalDate = currentDate(dataFinal).toISOString();

  return (
    <>
    <CounterProvider
      initialDate={initialDate}
      finalDate={finalDate}
      counterType={counterType}
    >
      {(counterType === 'banner') && <Banner finalDate={finalDate}/>}
      {(counterType === 'stamp') && <Stamp finalDate={finalDate} />}
    </CounterProvider>
    </>
  )
}

export default CounterInfo
