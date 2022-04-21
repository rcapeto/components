type Callback<Data> = (event: CustomEventInit<Data>) => void;

export function useEvents<Data = {}>(eventName: string, callback: Callback<Data>) {
   const dispatchEvent = (detail: Data) => {
      window.dispatchEvent(
         new CustomEvent(eventName, { detail })
      );
   };

   const listenEvent = () => {
      window.addEventListener(eventName, callback);
   };

   return { listenEvent, dispatchEvent };
}