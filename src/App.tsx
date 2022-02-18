import { Settings } from 'react-slick';
import BannerCountdoun from './components/BannerCountdown';
import { ContentBannerProps } from './components/BannerCountdown/types';

const array: ContentBannerProps[] = [
  {
    image: 'https://www.pngkey.com/png/full/541-5416886_darkness.png',
    alt: 'darkness',
    title: 'Darkness',
    countdown:{
      text:'Oferta termina em :',
      countdownUse:true,
      dataInit:'2022-02-17T08:00:00.000Z',
      dataFinish:'2022-02-18T03:46:00.000Z'
    }
  },
  {
    image: 'https://www.guardiantelecom.com/wp-content/uploads/2020/06/guardian-wave-3-1920x391-1.png',
    alt: 'guardian',
    title: 'Guardian',
    countdown:{
      text:'Oferta termina em :',
      countdownUse:true,
      dataInit:'2022-02-17T08:00:00.000Z',
      dataFinish:'2022-02-20T03:00:00.000Z'
    }
  },
  {
    image: 'https://www.pngkey.com/png/full/541-5416886_darkness.png',
    alt: 'darkness',
    title: 'Darkness',
    countdown:{
      text:'Oferta termina em :',
      countdownUse:true,
      dataInit:'2022-02-17T08:00:00.000Z',
      dataFinish:'2022-02-18T03:46:00.000Z'
    }
  },
  {
    image: 'https://www.guardiantelecom.com/wp-content/uploads/2020/06/guardian-wave-3-1920x391-1.png',
    alt: 'guardian',
    title: 'Guardian',
    countdown:{
      text:'Oferta termina em :',
      countdownUse:true,
      dataInit:'2022-02-17T08:00:00.000Z',
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