import React, { useEffect, useState } from 'react';
import { classes } from '../../../config/class';
import { useTimer } from '../../../hooks/useTimer';
import { useCounter } from '../Context';
import Loading from '../Loading';

import './style.scss';


const Stamp = ({ finalDate }) => {
  const [loading, setLoading] = useState(true);
  const baseClass = classes.baseG;
  const { secondsSTR, minutesSTR, hoursSTR, active } = useTimer(finalDate);

  useEffect(() => {
    setLoading(false)
  }, []);

  if (loading) {
    return (
      <div className={`${baseClass}couterPDPContainer`}>
        <Loading />
      </div>
    )
  };
  return (
    <>
      {active &&
        <div
          className={`${baseClass}container-offter-counter ba b--light-silver br2 bg-white flex flex-row-ns flex-column justify-center items-center`}
        >
            <p
              className={`${baseClass}stopwatch-info-counter white b flex items-center ma0`}
            >
              Oferta limitada {hoursSTR}:{minutesSTR}:{secondsSTR}
            </p>
        </div>
      }
    </>
  )
};

export default Stamp;
