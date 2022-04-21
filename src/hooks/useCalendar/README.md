# Hook [useCalendar]

- Hook that returns calendar values.
- Styling must be done

## 🚀 How to use

```jsx
   const Example: React.FunctionComponent = () => {
      const { calendarItems, currentMonth, currentYear, handleChangeMonth } = useCalendar('en-us');

      
      const nextMonth = () => handleChangeMonth('next');
      const prevMonth = () => handleChangeMonth('prev');

      return (
         <main>
            <header style={centerStyle}>
               <button onClick={prevMonth}>Prev Month</button>
               <h1>{currentMonth} - {currentYear}</h1>
               <button onClick={nextMonth}>Next Month</button>
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
```

## 💻 Documentation

### Props

| Prop | Type | Description                                                                                                                                         | Default Value |
| --------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------- |
| `locale`  | `string` | Language you want to use. Example: `pt-br`, `en-us` etc. | window.navigator.language |

### Returned values

| Prop | Type | Description                                                                                                                                         | Default Value |
| --------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------- |
| `currentMonth`  | `string` | Selected month | - |
| `currentYear`  | `number` | Selected year | - |
| `handleChangeMonth`  | `func` | Function that dispatch actions in calendar | - |
| `calendarItems`  | `Array<CalendarItem>` | Calendar Items | - |


#### handleChangeMonth params

| Prop | Type | Description                                                                                                                                         | Default Value |
| --------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------- |
| `type`  | `string` | `next` or `prev` | - |

#### CalendarItem params

| Prop | Type | Description                                                                                                                                         | Default Value |
| --------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------- |
| `week_day`  | `string` | Week day in the current day | - |
| `number_day`  | `string` | Day in the current month | - |
| `isWeekend`  | `boolean` | If day is weekend | - |


## 🔖 Layout

<p align="left">
<img width="366" alt="useCalendar example" src="https://user-images.githubusercontent.com/61842405/164389321-93d598b6-245c-4fa7-a364-cc79424e7d3d.png">

</p>

## 👨🏻‍💻 Developers
- [Raphael Capeto](https://github.com/rcapeto)


