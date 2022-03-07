
import { FunctionComponent, useEffect, useState } from 'react';
import { CountDownProps } from "../../types";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './styles.scss'
import Loading from '../Loading';
type ClockData = string | number;

const Countdown: FunctionComponent<CountDownProps> = ({
  text = 'Oferta acaba em',
  dataInit = '',
  dataFinish = ''
}) => {

  const [loading, setLoading] = useState(true)
  const [showCounter, setShowCounter] = useState(false)
  const countdownDate = new Date(dataFinish)
  const [dateTime, setDateTime] = useState({ hours: '0', minutes: '0', seconds: '0' })
  const { hours, minutes, seconds } = dateTime

  const setNewTime = () => {
    const currentTime = new Date()
    if (currentTime < countdownDate) {
      const distanceToDate = Math.abs(currentTime.getTime() - countdownDate.getTime());

      let days:ClockData = Math.floor(distanceToDate / (1000 * 60 * 60 * 24)),
        hours:ClockData = Math.floor((distanceToDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) + days * 24,
        minutes:ClockData = Math.floor((distanceToDate % (1000 * 60 * 60)) / (1000 * 60)),
        seconds:ClockData = Math.floor((distanceToDate % (1000 * 60)) / 1000);
        hours =   String(hours).padStart(2, '0');
        minutes = String(minutes).padStart(2, '0');
        seconds = String(seconds).padStart(2, '0');
      setDateTime({ hours, minutes, seconds });
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
                {hours}
              </div>
              <div className={`gbcintra-components--bannerCountDownBFCounterText`}>
                Horas
              </div>
            </li>
            <li className={`gbcintra-components--bannerCountDownBFCounterBox`}>
              <div className={`gbcintra-components--bannerCountDownBFCounterItem`}>
                {minutes}
              </div>
              <div className={`gbcintra-components--bannerCountDownBFCounterText`}>
                Minutos
              </div>
            </li>
            <li className={`gbcintra-components--bannerCountDownBFCounterBox`}>
              <div className={`gbcintra-components--bannerCountDownBFCounterItem`}>
                {seconds}
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