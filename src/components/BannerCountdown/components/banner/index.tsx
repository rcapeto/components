
import { FunctionComponent } from 'react';
import { ContentBannerProps } from "../../types";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './styles.scss'
import Countdown from '../Countdown';

const Banner: FunctionComponent<ContentBannerProps> = ({
  image,
  alt = '',
  title = '',
  countdown = {}
}) => {

  return (
    <div className='gbcintra-component--box-image'>
      {countdown.countdownUse && (
      <Countdown {...countdown}/>
      )}
      <figure className='gbcintra-component--figure-banner'>
        <img className='gbcintra-component--image-banner' src={image} alt={alt} title={title}/>
        <figcaption>
          <p className='gbcintra-component--title-description-banner'>{title}</p>
        </figcaption>
      </figure>
    </div>
  );
}

export default Banner;