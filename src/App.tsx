import { FunctionComponent } from 'react';
import { Accordion } from './components/Accordion';
import { FAQ } from './components/FAQ';

const App: FunctionComponent = () => {
  const items = [
    {
      question: 'How many stars this repo deserves?',
      answer: 'All stars!'
    }
  ];
  return(
    <div className="container">
     <Accordion 
      title={'How many stars this repo deserves?'}
      description={'All stars!'}
     />

     <div style={{ height: '50vh' }}/>

     <FAQ items={items}/>
    </div>
  );
};

export default App;