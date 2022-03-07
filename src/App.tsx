import { Settings } from 'react-slick';
import BannerCountdoun from './components/BannerCountdown';
import { ContentBannerProps } from './components/BannerCountdown/types';

import { useTimer } from './hooks/useTimer';

const App: FunctionComponent = () => {
  const current = new Date();
  current.setDate(current.getDate() + 1);
  
  const { daysSTR, hoursSTR, minutesSTR, secondsSTR } = useTimer(current.toISOString());

  return(
    <div className="container">
      <h1>Timer</h1>
      <div style={{ display: 'flex', gap: '3px', alignItems: 'center' }}>
        <span>{daysSTR}</span>
        <span>:</span>
        <span>{hoursSTR}</span>
        <span>:</span>
        <span>{minutesSTR}</span>
        <span>:</span>
        <span>{secondsSTR}</span>
      </div>
    </div>
  );
};

export default App;