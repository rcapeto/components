import { useRef, useState } from 'react';
import { ProxySubscribers } from '../../utils/singleton/ProxySubscribers';

import { UseProxyConfiguration } from './types';
import { proxy as createProxy } from './utils/proxy';

export function useProxy<Type extends object>(initialState?: Type, config?: Partial<UseProxyConfiguration<Type>>): Type {
   const [, setIndex] = useState(0);

   const proxySubscribers = ProxySubscribers.getInstance().getSubscribers();

   const proxy = useRef<Type>(
      createProxy(initialState ?? {} as any, {
         set(target, property, newValue) {
            if(target[property] === newValue) {
               return true;
            }

            notifyAll(target[property], newValue);

            if(config?.handlers?.set) {
               config.handlers.set(target, property as keyof Type, newValue);
            } else {
               target[property] = newValue;
            }
 
            setIndex(prevState => prevState + 1);
            return true;
         },
         get(target, property) {
            const handler = config?.handlers?.get;
            return handler?.(target, property as keyof Type) ?? target[property];
         }
      }),
   );

   if(!config?.cancelSubscription) {
      proxySubscribers.set(proxy.current, new Set<CallableFunction>());
   }

   function notifyAll(oldValue: any, newValue: any) {
      const subscriptions = proxySubscribers.get(proxy.current);

      if(subscriptions) {
         subscriptions.forEach(subscriber => {
            subscriber(oldValue, newValue);
         });
      }
   }

   return proxy.current;
}