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
    const cancel = subscribe(state, (oldValue, newValue) => {
      console.log('Subscribe middleware', { oldValue, newValue });
    });

    return () => {
      cancel();
    };
  }, [state]);

  return(
    <TestLayout isDarkMode>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <h1 style={{ color: 'white' }}>Master</h1>
      </div>
    </TestLayout>
  );
}