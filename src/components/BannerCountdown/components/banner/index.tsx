
import { BannerProps } from "../../types";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './styles.scss'


const Banner = (banner: BannerProps, key: number) => {

  return (
    <>
      <figure key={key}>
        <img src={banner.image} alt={banner.alt}></img>
        <figcaption>
          <p>{banner.title}</p>
        </figcaption>
      </figure>
    </>
  );
}

export default Banner;