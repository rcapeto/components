
import { FunctionComponent, useEffect, useState } from 'react';
import { CountDownProps } from "../../types";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './styles.scss'
import Loading from '../Loading';

const Countdown: FunctionComponent<CountDownProps> = ({
  text = 'Oferta acaba em',
  dataInit = '',
  dataFinish = ''
}) => {

  const [loading, setLoading] = useState(true)
  const [showCounter, setShowCounter] = useState(false)
  const countdownDate = new Date(dataFinish)
  const [dateTime, setDateTime] = useState({ hoursFomated: `0`, minutesFomated: `0`, secondsFomated: `0` })
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
        <Loading />
      </div>
    )
  }


  return (
    <>
      {showCounter && (
        <div className={`gbcintra-components--countDownBannerCounterWrap`}>
          <h2 className={`gbcintra-components--countDownBannerTitle`}>
            {text}
          </h2>
          <ul className={`gbcintra-components--bannerCountDownBFCounter`}>
            <li className={`gbcintra-components--bannerCountDownBFCounterBox`}>
              <div className={`gbcintra-components--bannerCountDownBFCounterItem`}>
                {hoursFomated}
              </div>
              <div className={`gbcintra-components--bannerCountDownBFCounterText`}>
                Horas
              </div>
            </li>
            <li className={`gbcintra-components--bannerCountDownBFCounterBox`}>
              <div className={`gbcintra-components--bannerCountDownBFCounterItem`}>
                {minutesFomated}
              </div>
              <div className={`gbcintra-components--bannerCountDownBFCounterText`}>
                Minutos
              </div>
            </li>
            <li className={`gbcintra-components--bannerCountDownBFCounterBox`}>
              <div className={`gbcintra-components--bannerCountDownBFCounterItem`}>
                {secondsFomated}
              </div>
              <div className={`gbcintra-components--bannerCountDownBFCounterText`}>
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