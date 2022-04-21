export interface CalendarItem {
   week_day: string;
   number_day: string;
   isWeekend: boolean;
};

export type HandleChangeMonthType = 'next' | 'prev';