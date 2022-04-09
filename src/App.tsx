import { Settings } from 'react-slick';
import BannerCountdoun from './components/BannerCountdown';
import { ContentBannerProps } from './components/BannerCountdown/types';

const array: ContentBannerProps[] = [
  {
    image: 'https://www.google.com/logos/doodles/2022/dr-michiaki-takahashis-94th-birthday-6753651837109359-l.webp',
    alt: 'google',
    title: 'Google',
    countdown:{
      countdownUse:true,
      dataInit:'09/04/2022',
      dataFinish:'09/04/2022 14:16',
      text:'testooo'
    }
  },
  {
    image: 'https://www.google.com/logos/doodles/2022/dr-michiaki-takahashis-94th-birthday-6753651837109359-l.webp',
    alt: 'google',
    title: 'Google',
    countdown:{
      countdownUse:true,
      dataInit:'09/04/2022',
      dataFinish:'09/04/2022 15:00',
      text:'testooo'
    }
  },
];

const setting: Settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
}

const App = () => {
  return (
    <BannerCountdoun
      sliderSettings={setting}
      contents={array}
    />
  );
};

export default App;