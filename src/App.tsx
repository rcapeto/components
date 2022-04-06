import { WhatsappChat } from "./components/WhatsappChat";

const App = () => {
  return (
    <WhatsappChat
      visible
      phone='5516999999999'
      pulse
      message='Preciso de ajuda com isso:'
      position='bottom-right'
    />
  );
};

export default App;