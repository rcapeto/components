import { Settings } from 'react-slick';
import BannerCountdoun from './components/BannerCountdown';
import { ContentBannerProps } from './components/BannerCountdown/types';

const array: ContentBannerProps[] = [
  {
    image: 'https://media-exp1.licdn.com/dms/image/C5603AQEQ4OoOUdaD-Q/profile-displayphoto-shrink_200_200/0/1643218014648?e=1650499200&v=beta&t=Tt0qZ-IseRkw330JUoTOLKLLPQHrpw9bF8-_YwLPQ-g',
    alt: 'raphael',
    title: 'Raphael',
    countdown:{
      countdownUse:true,
      dataInit:'2022-02-17T08:00:00.000Z',
      dataFinish:'2022-02-18T03:46:00.000Z'
    }
  },
  {
    image: 'https://www.google.com/logos/doodles/2022/dr-michiaki-takahashis-94th-birthday-6753651837109359-l.webp',
    alt: 'google',
    title: 'Google',
    countdown:{
      countdownUse:true,
      dataInit:'2022-02-17T08:00:00.000Z',
      dataFinish:'2022-02-19T03:00:00.000Z'
    }
  },
  {
    image: 'https://www.google.com/logos/doodles/2022/dr-michiaki-takahashis-94th-birthday-6753651837109359-l.webp',
    alt: 'google',
    title: 'Google',
    countdown:{
      countdownUse:true,
      dataInit:'2022-02-17T03:00:00.000Z',
      dataFinish:'2022-02-20T03:00:00.000Z'
    }
  }
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