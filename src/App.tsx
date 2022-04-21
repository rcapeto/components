import { useCalendar } from "./hooks/useCalendar";

const App = () => {
  const { calendarItems, currentMonth, currentYear, handleChangeMonth } = useCalendar('en-us');

  const centerStyle = { display: 'flex', alignItems: 'center', gap: '10px' };
  
  return (
    <main style={{ ...centerStyle, justifyContent: 'center', flexDirection: 'column' }}>
      <header style={centerStyle}>
        <button onClick={() => handleChangeMonth('prev')}>Prev Month</button>
        <h1>{currentMonth} - {currentYear}</h1>
        <button onClick={() => handleChangeMonth('next')}>Next Month</button>

      </header>
      <section>
        <ul>
          { 
            calendarItems.map(({ week_day, isWeekend, number_day }, index) => (
              <li key={String(index)}>
                {number_day} - {week_day} - Weekend: {isWeekend ? 'Yes' : 'No' }
              </li>
            ))
          }
        </ul>
      </section>
    </main>
  );
};

export default App;