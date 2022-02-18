
import { FunctionComponent, useEffect, useState } from 'react';
import { CountDownProps } from "../../types";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './styles.scss'
import Loading from '../Loading';

const Countdown: FunctionComponent<CountDownProps> = ({
  text ='Oferta acaba em',
  dataInit = '',
  dataFinish = ''
}) => {

  const [loading, setLoading] = useState(true)
  const [showCounter, setShowCounter] = useState(false)
  const countdownDate = new Date(dataFinish)
  const [dateTime, setDateTime] = useState({ hoursFomated:`0`, minutesFomated:`0`, secondsFomated:`0` })
  const { hoursFomated, minutesFomated, secondsFomated } = dateTime

  const setNewTime = () => {
    const currentTime = new Date()
    if (currentTime < countdownDate) {
      const distanceToDate = Math.abs(currentTime.getTime() - countdownDate.getTime());

      let days = Math.floor(distanceToDate / (1000 * 60 * 60 * 24)),
      hours = Math.floor((distanceToDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) + days * 24,
      minutes = Math.floor((distanceToDate % (1000 * 60 * 60)) / (1000 * 60)),
      seconds = Math.floor((distanceToDate % (1000 * 60)) / 1000),
      hoursFomated = hours < 10 ? `0${hours}` : `${hours}`,
      minutesFomated = minutes < 10 ? `0${minutes}` : `${minutes}`,
      secondsFomated = seconds < 10 ? `0${seconds}` : `${seconds}`;
      setDateTime({ hoursFomated, minutesFomated, secondsFomated });
      setShowCounter(true);
    } else {
      setShowCounter(false);
    }
  }
  useEffect(() => {
    setInterval(() => setNewTime(), 1000);
    setLoading(false);
  }, [])

  if (loading) {
    return (
      <div
        className={`gbcintra-components--countDownBannerContainer`}
        id="banner-countdown-bf"
      >
        <Loading/>
      </div>
    )
  }


  return (
    <>
      {showCounter&&(
                <div
                className={
                  `gbcintra-components--countDownBannerCounterWrap
                 flex flex-wrap justify-center`}
              >
                <h2 className={`gbcintra-components--countDownBannerTitle`}>
                  {text}
                </h2>
                <ul
                  className={`gbcintra-components--bannerCountDownBFCounter list ph5 items-center`}
                >
                  <li
                    className={`gbcintra-components--bannerCountDownBFCounterBox bg-center cover flex flex-wrap justify-center items-center pv2 relative tc`}
                  >
                    <div className={`gbcintra-components--bannerCountDownBFCounterItem f4`}>
                      {hoursFomated}
                    </div>
                    <div
                      className={`gbcintra-components--bannerCountDownBFCounterText white w-100`}
                    >
                      Horas
                    </div>
                  </li>
                  <li
                    className={`gbcintra-components--bannerCountDownBFCounterBox bg-center cover flex flex-wrap justify-center items-center pv2 relative tc`}
                  >
                    <div className={`gbcintra-components--bannerCountDownBFCounterItem f4`}>
                      {minutesFomated}
                    </div>
                    <div
                      className={`gbcintra-components--bannerCountDownBFCounterText white w-100`}
                    >
                      Minutos
                    </div>
                  </li>
                  <li
                    className={`gbcintra-components--bannerCountDownBFCounterBox bg-center cover flex flex-wrap justify-center items-center pv2 relative tc`}
                  >
                    <div className={`gbcintra-components--bannerCountDownBFCounterItem f4`}>
                      {secondsFomated}
                    </div>
                    <div
                      className={`gbcintra-components--bannerCountDownBFCounterText white w-100`}
                    >
                      Segundos
                    </div>
                  </li>
                </ul>
              </div>
      )}
    </>
  );
}

export default Countdown;