export interface IUseTimer {
   hours: number,
   minutes: number,
   seconds: number,
   days: number,
   hasEnd: boolean, 
}

export const initialState: IUseTimer = {
   hours: 0,
   minutes: 0,
   seconds: 0,
   days: 0,
   hasEnd: 0
}