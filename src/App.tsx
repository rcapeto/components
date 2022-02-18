import BannerCountdoun from './components/BannerCountdown';
import { BannerProps } from './components/BannerCountdown/types';
import { Settings } from "react-slick";

const array: BannerProps[] = [
  {
    image: 'https://www.google.com/logos/doodles/2022/dr-michiaki-takahashis-94th-birthday-6753651837109359-l.webp',
    alt: 'google',
    url: 'https://www.google.com.br',
    title: 'Google'
  },
  {
    image: 'https://www.google.com/logos/doodles/2022/dr-michiaki-takahashis-94th-birthday-6753651837109359-l.webp',
    alt: 'google',
    url: 'https://www.google.com.br',
    title: 'Google'
  },
  {
    image: 'https://www.google.com/logos/doodles/2022/dr-michiaki-takahashis-94th-birthday-6753651837109359-l.webp',
    alt: 'google',
    url: 'https://www.google.com.br',
    title: 'Google'
  }
];

const confi: Settings = {
  arrows: true,
  autoplay: true,
  adaptiveHeight: true,
  dots: true,
  infinite: true,
  lazyLoad: 'ondemand',
  slidesToScroll: 1,
  slidesToShow: 1
}


const App = () => {
  return (
    <BannerCountdoun
    

    />
  );
};

export default App;