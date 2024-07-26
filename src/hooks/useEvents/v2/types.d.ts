export type Callback<Detail> = (event: CustomEventInit<Detail>) => void;

export interface DispatchedEvent {
   data: CustomEventInit;
   location: string;
   time: string;
}

export interface EventContextValues {
   dispatchEvent: <Detail = undefined>(eventName: string, detail: Detail) => void;
   listenEvent: <Detail = undefined>(eventName: string, callback: Callback<Detail>) => void;
   timeDispatched: string;
   dispatchedEvents: Record<string, DispatchedEvent[]>;
   dispatchedPages: string[];
   quantityEventsDispatched: number;
};