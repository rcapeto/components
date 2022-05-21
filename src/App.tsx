import { MagicScrollCallback } from "./components/MagicScrollCallback";

import './global.scss';

const texts = [
  'Step 1',
  'Step 2',
  'Step 3',
];

const Spacer = () => <div style={{ height: '200vh' }}/>

const App = () => {
  const getActiveDescription = (progress: number, index: number): boolean => {
    const partProgress = 1 / texts.length;
    const inital = partProgress * index;
    const final = partProgress * (index + 1);

    return progress >= inital && progress <= final;
  };

  return(
    <div>
      <Spacer />
        <MagicScrollCallback>
          {
            (progress) => (
              <div className="magic-test-container" 
                data-progress={progress}
              >
                <img src="https://fakeimg.pl/350x400/" alt="Fake" />

                <div className="descriptions">
                  {
                    texts.map((text, index) => (
                      <p 
                        key={index}
                        className={`${getActiveDescription(progress, index) ? 'hasActive' : ''}`}
                      >
                        {text}
                      </p>
                    ))
                  }
                </div>
              </div>
            )
          }  
        </MagicScrollCallback>
      <Spacer />
    </div>
  );
};

export default App;