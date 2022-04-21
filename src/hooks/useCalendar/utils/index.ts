export const getMonths = (locale: string): string[] => {
   return Array.from({ length: 12 }, (_, month) => {
      const date = new Date(0, month);
      const currentMonth = date.toLocaleDateString(locale, { month: 'long' });
      const formatedMonth = currentMonth.replace(currentMonth[0], currentMonth[0].toUpperCase());
      return formatedMonth;
   });
};

export const getDaysWeek = (locale: string): string[] => {
   return Array.from({ length: 7 }, (_, day) => {
      const date = new Date(0, 0, day);
      const currentDayWeek = date.toLocaleDateString(locale, { weekday: 'long' });
      const formatedWeekDay = currentDayWeek.replace(currentDayWeek[0], currentDayWeek[0].toLocaleUpperCase());
      return formatedWeekDay;
   });
};