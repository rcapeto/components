import { useEffect, useState } from 'react';

import { getMonths, getDaysWeek } from './utils';
import { CalendarItem, HandleChangeMonthType } from './types';

/**
 * @param locale @string 
 */

export const useCalendar = (locale: string = window.navigator.language) => {
   const all_months = getMonths(locale);
   const all_week_days = getDaysWeek(locale);
   const now = new Date();

   const [currentMonth, setCurrentMonth] = useState(now.getMonth());
   const [currentYear, setCurrentYear] = useState(now.getFullYear());
   const [calendarItems, setCalendarItems] = useState<CalendarItem[]>([]);

   const handleChangeMonth = (type: HandleChangeMonthType) => {
      const usedMonth = type === 'next' ? currentMonth + 1 : currentMonth - 1;
      const date = new Date(currentYear, usedMonth, 1);
      const month = date.getMonth();
      const year = date.getFullYear();

      setCurrentMonth(month);
      setCurrentYear(year);
      getDays({ month, year });
   };

   const getDays = ({ month, year }: { month: number, year: number }) => {
      const numberOfDays = new Date(year, month + 1, 0).getDate();
      const items: CalendarItem[] = [];

      for(let day = 1; day <= numberOfDays; day++) {
         const date = new Date(year, month, day);
         const day_week = date.getDay();

         const isWeekend: boolean = day_week === 6 || day_week === 0;

         items.push({
            week_day: all_week_days[day_week],
            number_day: `${day}`.padStart(2, '0'),
            isWeekend
         });
      }

      setCalendarItems(items);
   };

   useEffect(() => {
      getDays({ year: currentYear, month: currentMonth });
   }, []);

   return {
      handleChangeMonth,
      currentMonth: all_months[currentMonth],
      currentYear,
      calendarItems
   };
};
