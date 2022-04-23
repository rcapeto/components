import { createContext, FunctionComponent, useContext, useMemo, useState } from 'react';

import { Callback, EventContextValues, DispatchedEvent } from './types';

const EventContext = createContext({} as EventContextValues);

export const EventContextProvider: FunctionComponent = ({ children }) => {
   const eventTarget = new EventTarget();
   const [timeDispatched, setTimeDispatched] = useState<string>('');
   const [dispatchedEvents, setDispatchedEvents] = useState<Record<string, DispatchedEvent[]>>({});
   const [dispatchedPages, setDispatchedPages] = useState<string[]>([]);

   function dispatchEvent<Detail = undefined>(eventName: string, detail: Detail) {
      const event = new CustomEvent(eventName, { detail });
      const clonedEvents = { ...dispatchedEvents };

      const location = window.location.href;
      const now = getCurrentTime();

      const dispatchedEvent: DispatchedEvent = {
         data: event,
         location,
         time: now,
      };

      if(Reflect.has(clonedEvents, eventName)) {
         clonedEvents[eventName].push(dispatchedEvent);
      } else {
         clonedEvents[eventName] = [dispatchedEvent];
      }

      setDispatchedEvents(clonedEvents);
      setTimeDispatched(now);

      !dispatchedPages.includes(location) && 
         setDispatchedPages([...dispatchedPages, location]);

      eventTarget.dispatchEvent(event);
   };

   function listenEvent<Detail = undefined>(eventName: string, callback: Callback<Detail>) {
      eventTarget.addEventListener(eventName, callback);
   }

   const getCurrentTime = () => {
      return new Date().toISOString();
   };

   const quantityEventsDispatched = useMemo<number>(() => {
      let quantity = 0;

      for(const key of Object.keys(dispatchedEvents)) {
         quantity += dispatchedEvents[key].length;
      };

      return quantity;
   }, [dispatchedEvents]);

   return(
      <EventContext.Provider
         value={{ 
            dispatchEvent, 
            listenEvent,
            dispatchedEvents,
            dispatchedPages,
            timeDispatched,
            quantityEventsDispatched
         }}
      >
         { children }
      </EventContext.Provider>
   );
};

export const useEvents = () => useContext(EventContext);