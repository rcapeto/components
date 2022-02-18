import './styles.scss'
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { BannerProps } from './types';
import Banner from './components/banner';

const BannerCountdoun = (settings: Settings, contents: BannerProps[]) => {

    return (
        <>
            <h1>Teste</h1>
            <Slider {...settings} className="mainSlider">
                {contents.map((banner, index) => (
                    <Banner {...banner} key={index} />
                ))}
            </Slider>
        </>

    );
}

export default BannerCountdoun;