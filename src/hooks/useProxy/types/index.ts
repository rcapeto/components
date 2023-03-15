export interface ProxyHandler<Type> {
   get: (target: Type, property: keyof Type) => void,
   set: (target: Type, property: keyof Type, newValue: any) => void,
};

export interface UseProxyConfiguration<Type> {
   handlers: Partial<ProxyHandler<Type>>;
   cancelSubscription: boolean;
}
