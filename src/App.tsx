import { TestLayout } from './components/TestLayout';
import { useProxy } from './hooks/useProxy';

export default function App() {
  const state = useProxy({ count: 0 });

  function increment() {
    state.count = state.count === 5 ? 5 : state.count + 1;
  }

  return(
    <TestLayout isDarkMode>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <h2 style={{ color: 'white' }}>State</h2>
        <p style={{ color: 'white', marginTop: 20 }}>
          Contador: { state.count }
        </p>

        <button onClick={increment}>Adicionar</button>
      </div>
    </TestLayout>
  );
}