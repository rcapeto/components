export function proxy<Type extends object>(
   initialState: Type, 
   handler: ProxyHandler<Type>,
): Type {
   return new Proxy(initialState as any, handler);
}