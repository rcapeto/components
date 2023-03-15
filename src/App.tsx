import { useEffect } from 'react';
import { TestLayout } from './components/TestLayout';
import { useProxy } from './hooks/useProxy';
import { subscribe } from './hooks/useProxy/utils/subscription';

export default function App() {
  const state = useProxy({ count: 0 });

  function increment() {
    state.count += 1;
  }

  useEffect(() => {
    const cancel = subscribe(state, console.log);

    return () => {
      cancel();
    };
  }, [state]);

  return(
    <TestLayout isDarkMode>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <h2 style={{ color: 'white' }}>State</h2>
        <p style={{ color: 'white', marginTop: 20 }}>
          Contador: { state.count }
        </p>

        <button onClick={increment}>
          Adicionar
        </button>
      </div>
    </TestLayout>
  );
}