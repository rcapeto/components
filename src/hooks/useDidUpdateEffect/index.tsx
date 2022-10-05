import { useEffect, useRef, DependencyList } from 'react';

export default function useDidUpdateEffect(fn: CallableFunction, deps: DependencyList | undefined) {
  const fncRef = useRef(fn);
  const didMountRef = useRef(false);

  useEffect(() => {
    if (!didMountRef.current) {
      didMountRef.current = true;
    } else {
      return fncRef.current();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}