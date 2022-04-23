import { useRange } from "./hooks/useRange";

const App = () => {
  const { createRange, createRangeWithStep } = useRange();

  const r1 = createRange(3); 
  const r2 = createRangeWithStep(10, 0, 5); 

  console.log(r1); //[1, 2, 3]
  console.log(r1); //[0, 5, 10]
 
  return(
    <h1>Example</h1>
  )
};

export default App;