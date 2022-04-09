import React, { useEffect, useState } from 'react';
import Loading from '../Loading';
import './style.scss';
import { classes } from '../../../config/class';
import { useTimer } from '../../../hooks/useTimer';

const Banner = ({ finalDate }) => {
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
        <div className={`${baseClass}bannerPDPContainer`}>
          <div className={`${baseClass}bannerPDPBox`}>
            <h2 className={`${baseClass}bannerPDPTitle`}>Oferta <span>relâmpago</span></h2>
            <p className={`${baseClass}bannerPDPText`}>
              Produto com desconto imperdível por tempo limitado
            </p>
          </div>
          <div className={`${baseClass}counterBannerContainer`}>
              <div
                className={`${baseClass}counterBannerCounterWrap`}
              >
                <h2 className={`${baseClass}counterBannerTitle`}>
                  Esta oferta termina em
                </h2>
                <ul
                  className={`${baseClass}counterBannerCounter list ph5 items-center`}
                >
                  <li
                    className={`${baseClass}counterBannerCounterBox`}
                  >
                    <div className={`${baseClass}counterBannerCounterItem`}>
                      {hoursSTR}
                    </div>
                    <div
                      className={`${baseClass}counterBannerCounterText`}
                    >
                      Horas
                    </div>
                  </li>
                  <li
                    className={`${baseClass}counterBannerCounterBox`}
                  >
                    <div className={`${baseClass}counterBannerCounterItem`}>
                      {minutesSTR}
                    </div>
                    <div
                      className={`${baseClass}counterBannerCounterText`}
                    >
                      Minutos
                    </div>
                  </li>
                  <li
                    className={`${baseClass}counterBannerCounterBox`}
                  >
                    <div className={`${baseClass}counterBannerCounterItem`}>
                      {secondsSTR}
                    </div>
                    <div
                      className={`${baseClass}counterBannerCounterText`}
                    >
                      Segundos
                    </div>
                  </li>
                </ul>
              </div>
          </div>
        </div>
      }
    </>
  )
};

export default Banner;
