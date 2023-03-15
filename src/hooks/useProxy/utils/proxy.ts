import { ProxySubscribers } from '../../../utils/singleton/ProxySubscribers';
import { UseProxyConfiguration } from '../types';

interface Config<Type> extends UseProxyConfiguration<Type> {
   notifyAll?: (oldValue: any, newValue: any) => void;
   updateState?: () => void;
};

export function proxy<Type extends object>(initialState: Type, config: Config<Type>): Type {
   const proxySubscribers = ProxySubscribers.getInstance().getSubscribers();
   
   return new Proxy(initialState as any, {
      
   });
}