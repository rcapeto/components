import { MagicScroll } from "./components/MagicScroll";
import { Slider } from "./components/Slider";

const items = [
  { title: 'Scroll to Begin', text: 'start like this' }, 
  { title: 'Step 1', text: 'Here is step 1' },
  { title: 'Step 2', text: 'Here is step 2' },
  { title: 'Step 3', text: 'Here is step 3' },
  { title: 'Step 4', text: 'Here is step 4' },
];

const App = () => {
  return(
    <div>
      <Slider>
      {
          items.map((item, index) => (
            <div key={String(index)} style={{ background: 'gray', width: '100%', height: '100%' }}>
              <h1>{item.title}</h1>
              <p>{item.text}</p>
            </div>
          ))
        }
      </Slider>
      <MagicScroll>
        {
          items.map((item, index) => (
            <div key={String(index)} style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <h1>{item.title}</h1>
              <p>{item.text}</p>
            </div>
          ))
        }
      </MagicScroll>
    </div>
    
  )
};

export default App;