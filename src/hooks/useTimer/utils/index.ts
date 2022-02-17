import { SECONDS_IN_HOUR, SECONDS_IN_MINUTE } from '../config';

export const hasToShowWithInitial = (initialDate: string, expiredDate: string): boolean => {
   const now = new Date();
   const initial = new Date(initialDate);
   const expired = new Date(expiredDate);

   if(now.getTime() < initial.getTime()) return false;

   return now.getTime() >= expired.getTime();
};

export const hasEndTimer = (expiredDate: string): boolean => {
   const now = new Date();
   const finalDate = new Date(expiredDate);
   return now.getTime() >= finalDate.getTime();
};

export const parseTimeRemaining = (secondsLeft: number) => {
   return {
     days: Math.round(secondsLeft / 60 / 60 / 24),
     hours: Math.floor(secondsLeft / SECONDS_IN_HOUR % 24),
     minutes: Math.floor((secondsLeft % SECONDS_IN_HOUR) / SECONDS_IN_MINUTE),
     seconds: Math.floor((secondsLeft % SECONDS_IN_HOUR) % SECONDS_IN_MINUTE),
   }
};