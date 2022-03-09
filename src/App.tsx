import { ShareButton } from './components/ShareButton';

const App = () => {
  return (
    <ShareButton
      textButton='Compartilhar'
      message='Confira só isso'
      colorPrimary='#fff'
      backgroundPrimary='#000'
      colorSecondary='#000'
      backgroundSecondary='#dcdde0'
      facebook
      twitter
      pinterest
      linkedin
      email
      telegram
      whatsapp
    />
  );
};

export default App;