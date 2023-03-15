export class ProxySubscribers {
   private proxySubscribers: Map<object, Set<CallableFunction>>;
   private static INSTANCE: ProxySubscribers;

   private constructor() {
      this.proxySubscribers = new Map<object, Set<CallableFunction>>();
   }

   public static getInstance() {
      if (!this.INSTANCE) {
        this.INSTANCE = new ProxySubscribers();
      }
  
      return this.INSTANCE;
    }

    public getSubscribers() {
      return this.proxySubscribers;
    }
}