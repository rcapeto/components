
import { FunctionComponent, useEffect, useState } from 'react';
import { ContentBannerProps } from "../../types";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './styles.scss'
import { useTimer } from '../../../../hooks/useTimer';
import Loading from '../Loading';
import { classes } from '../../../../config/class';

const Banner: FunctionComponent<ContentBannerProps> = ({
  image = 'https://howfix.net/wp-content/uploads/2018/02/sIaRmaFSMfrw8QJIBAa8mA-article.png',
  alt = 'Imagem do Banner',
  title = '',
  countdown = {
    countdownUse: false,
    dataFinish: '',
    dataInit: '',
    text: '',
  }
}) => {
  const [ loading, setLoading] = useState(true)
  const baseClass = classes.baseG;

  const currentDate = (date: any) => {
    const [day, month, year] = date.split('/');
    return ([month, day, year].join('/'));
  }
  useEffect(() => {
    setLoading(false);
  },[])
  // const dataInitFormater = currentDate(countdown.dataInit);
  const dataFinishFormater = currentDate(countdown.dataFinish);

  const { secondsSTR, minutesSTR, hoursSTR, active } = useTimer(dataFinishFormater);
  
  if (loading) {
    return (
      <div
        className={`${baseClass}countDownBannerContainer`}
        id="banner-countdown"
      >
        <Loading />
      </div>
    )
  }

  return (
    <div className='gbcintra-component--box-image'>
      {(countdown.countdownUse && active) && (
        <div className={`${baseClass}countDownBannerCounterWrap`}>
          <h2 className={`${baseClass}countDownBannerTitle`}>
            {countdown.text}
          </h2>
          <ul className={`${baseClass}bannerCountDownBFCounter`}>
            <li className={`${baseClass}bannerCountDownBFCounterBox`}>
              <div className={`${baseClass}bannerCountDownBFCounterItem`}>
                {hoursSTR}
              </div>
              <div className={`${baseClass}bannerCountDownBFCounterText`}>
                Horas
              </div>
            </li>
            <li className={`${baseClass}bannerCountDownBFCounterBox`}>
              <div className={`${baseClass}bannerCountDownBFCounterItem`}>
                {minutesSTR}
              </div>
              <div className={`${baseClass}bannerCountDownBFCounterText`}>
                Minutos
              </div>
            </li>
            <li className={`${baseClass}bannerCountDownBFCounterBox`}>
              <div className={`${baseClass}bannerCountDownBFCounterItem`}>
                {secondsSTR}
              </div>
              <div className={`${baseClass}bannerCountDownBFCounterText`}>
                Segundos
              </div>
            </li>
          </ul>
        </div>
      )}
      <figure className='gbcintra-component--figure-banner'>
        <img className='gbcintra-component--image-banner' src={image} alt={alt} title={title} />
        <figcaption>
          <p className='gbcintra-component--title-description-banner'>{title}</p>
        </figcaption>
      </figure>
    </div>
  );
}

export default Banner;