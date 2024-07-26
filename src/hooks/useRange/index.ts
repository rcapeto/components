export const useRange = () => {
   const createRange = (startParam: number, stopParam?: number) => {
      stopParam = !stopParam ? startParam : stopParam;
      startParam = stopParam === startParam ? 1 : startParam;
   
      const rangeLenght = (stopParam - startParam) + 1;
      const result = Array.from({ length: rangeLenght }, (_, index) => startParam + index);
      
      return result;
   };

   const createRangeWithStep = (end: number, start: number = 0, step: number = 1) => {
      const result: number[] = [];

      for(let i = start; i <= end; i+=step) result.push(i);

      return result;
   };

   return {
      createRange,
      createRangeWithStep
   };
};