import { ProxySubscribers } from "../../../utils/singleton/ProxySubscribers";

export function subscribe(proxy: object, callback: (oldValue: any, newValue: any) => void) {
   const proxySubscribers = ProxySubscribers.getInstance().getSubscribers();

   if(!proxySubscribers.has(proxy)) {
      console.warn("You are trying to add a subscribe to a proxy that does not exist", { proxy });
   }

   proxySubscribers.get(proxy)?.add(callback);

   return () => {
      proxySubscribers.get(proxy)?.delete(callback);
   };
}