export interface ICounterInfo {
    dataInitial?: string;
    dataFinal?: string;
    counterType?: CounterTypeProps;
}
export interface ICounterProvider extends ICounterInfo {
    children:any
}

type CounterTypeProps = 
   'banner' | 
   'stamp' 
