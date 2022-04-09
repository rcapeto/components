export interface ICounterInfo {
    dataInitial: string;
    dataFinal: string;
    counterType: CounterTypeProps;
}
export interface ICounterProvider {
    children:any;
    dataInitial: string;
    dataFinal: string;
}
export interface IStamp {
    finalDate: string;
}

type CounterTypeProps = 
   'banner' | 
   'stamp' 
