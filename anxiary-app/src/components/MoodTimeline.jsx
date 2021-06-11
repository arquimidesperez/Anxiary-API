// import CalendarHeatmap from 'reactjs-calendar-heatmap'
import { useState, useEffect } from 'react';
import MonthViewCalender from '../lib/Calendar';
import { getEntries } from '../services/api';
import './stylesheets/moodtimeline.css'

// import MonthViewCalender from "../../Calender/MonthViewCalender";
// import MonthDay from "../calender/monthDay";
// import { useState, useEffect } from "react";
export default function MoodTimeline() {
  const [count, setCount] = useState(0);
  const Month = new MonthViewCalender();
  const [month, setMonth] = useState(Month);
  // const [currentDay, setCurrentDay] = useState(Month.currentDateOfMonth());
  const [monthArray, setMonthArray] = useState(Month.monthArray());
  const [monthName, setMonthName] = useState(Month.monthName);
  const [entries, setEntries] = useState([]);
  const [monthYear, setMonthYear] = useState(Month.yearNumber);

  

  useEffect(() => {
    const fetchData = async () => {
      const res = await getEntries();
      setEntries(res);
      // console.log(res);
    };
    fetchData();
  }, []);

  // console.log(monthArray);


  useEffect(() => {
    setMonth(new MonthViewCalender(`moment().add(${count}, 'month')`));
  }, [count]);
  useEffect(() => {
    setMonthArray(month.monthArray());
    setMonthName(month.monthName);
  }, [month]);
  const button = () => {
      return <button onClick={() => setCount(count - 1)}>&lt;</button>;
  };

  const hotDay = [];
  entries.forEach((entry) => {
    hotDay.push(entry.fields?.Date);
  })


  const displayDate = (day) => {
    // console.log(hotDay);
    // console.log(day);
    let found;
    if (hotDay.includes(day.formattedDate)) {
      found = entries.find((entry) => {
        return entry.fields?.Date == day.formattedDate
      });
      // console.log(found);
    }
    if (found) {
      // if (found.fields.Mood = ) {
        
      // }
      var color;
      if(found.fields.Mood == 1){
        color = '#9b2226';
      } else if(found.fields.Mood == 2){
        color = '#bb3e03';
      } else if(found.fields.Mood == 3){
        color = '#faa307';
      } else if(found.fields.Mood == 4){
        color = '#90be6d';
      } else if(found.fields.Mood == 5){
        color = '#2a9d8f';
      };

      return <div className="Day" style={{backgroundColor: color}}> {day.date} </div>
    } else {
      return <div className="Day"> {day.date} </div>      
    }
  }

  // <div className="flex flex-wrap m-1 md:m-4 md:mt-10 sm:p-1 rounded border-solid border md:border-2 md:border-gray-400 md:shadow-lg">
  return (
    <div className="CalendarHolder">
      <div className="w-full">
        <div className="MonthContainer">
          <p>
          {button()}      
            {monthName} 
            {monthYear}
          <button onClick={() => setCount(count + 1)}>&gt;</button>
          </p>
        </div>
        <div className="flex text-sm text-center">
          <div className="WeekDay">Sunday</div>
          <div className="WeekDay">Monday</div>
          <div className="WeekDay">Tuesday</div>
          <div className="WeekDay">Wednesday</div>
          <div className="WeekDay">Thursday</div>
          <div className="WeekDay">Friday</div>
          <div className="WeekDay">Saturday</div>
        </div>
      </div>
      {monthArray.map((day, index) => {
        return (displayDate(day))
        // <MonthDay
        //   day={day}
        //   today={currentDay}
        //   monthName={monthName}
        //   key={index}
        //   index={index}
        // />
      })}
    </div>
  );
}

// export default function MoodTimeline() {
//   const calendar = new MonthViewCalendar();
//   const [count, setCount] = useState(0);
//   const [currentMonth, setCurrentMonth] = useState(calendar);
//   const [monthName, setMonthName] = useState(calendar.monthName);
//   const [monthArray, setMonthArray] = useState(calendar.monthArray());
//   console.log(calendar);
//   console.log(calendar.monthArray());

//   // useEffect(() => {
//   //   setCurrentMonth(new MonthViewCalendar(`moment().add(${count}, 'month')`));
//   // }, [count]);

//   // useEffect(() => {
//   //   setMonthArray(calendar.monthArray());
//   //   setMonthName(calendar.monthName);
//   // }, [currentMonth]);


//   return (
//     <div>
//             <br />
//       <br />
//       <br />
//       <button onClick={() => { setCount(prevCount => prevCount - 1) }}> - </button>
//       <div>{monthName}</div>
//       <button onClick={() => { setCount(prevCount => prevCount + 1) }}> + </button>
//       {monthArray.map((day) => {
//         return (
//           <div>{day.date}</div>
//         )
//       })}
//     </div>
//   )
  
// }