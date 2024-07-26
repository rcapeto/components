import { useState } from "react";

interface IuseDelayConfig {
   time?: number;
};

export const useDelay = ({ time = 2 }: IuseDelayConfig) => {
   const [delayTime, setDelayTime] = useState(time * 1000);

   const startDelay = async () => {
      await new Promise(resolve => setTimeout(resolve, delayTime));
   };

   const changeDelayTime = (seconds: number) => {
      setDelayTime(seconds * 1000);
   };

   return { startDelay, changeDelayTime, delayTime };
};