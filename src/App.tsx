import { useRandomString } from "./hooks/useRandomString";

const App = () => {
  const { randomString } = useRandomString();
  return (
    <h1>Random Number: {randomString}</h1>
  );
};

export default App;