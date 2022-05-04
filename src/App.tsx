import { Slider } from './components/Slider';

const items = [
  { title: 'Slide 1' },
  { title: 'Slide 2' },
  { title: 'Slide 3' },
  { title: 'Slide 4' },
];

const App = () => {
  return(
    <Slider onChangeSlide={index => console.log('indexslide', index)}>
      {
        items.map((item, index) => (
          <div key={index} style={{ backgroundColor: '#cecece', width: '100%', height: '100%' }}>
            <h1>{item.title}</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus, ipsum sequi eius dolore ?</p>
          </div>
        ))
      }
    </Slider>
  )
};

export default App;