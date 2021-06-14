// import CalendarHeatmap from 'reactjs-calendar-heatmap'
// Special thanks to Corey Gibson, this literally would not have been possible without him
import { useState, useEffect } from 'react';
import MonthViewCalender from '../lib/Calendar';
import { getEntries } from '../services/api';
import './stylesheets/moodtimeline.css'

export default function MoodTimeline() {
  const [count, setCount] = useState(0);
  const Month = new MonthViewCalender();
  const [month, setMonth] = useState(Month);
  const [monthArray, setMonthArray] = useState(Month.monthArray());
  const [monthName, setMonthName] = useState(Month.monthName);
  const [entries, setEntries] = useState([]);
  //eslint-disable-next-line
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
      return <button className='MonthChange' onClick={() => setCount(count - 1)}> Previous Month</button>;
  };

  const hotDay = [];
  entries.forEach((entry) => {
    hotDay.push(entry.fields?.Date);
  })


  const displayDate = (day) => {

    let found;
    if (hotDay.includes(day.formattedDate)) {
      found = entries.find((entry) => {
        // eslint-disable-next-line
        return entry.fields?.Date == day.formattedDate
      });
    }
    if (found) {
      var color;
        // eslint-disable-next-line
      if (found.fields.Mood == 1) {
        color = '#cdebe6';
        // eslint-disable-next-line
      } else if (found.fields.Mood == 2) {
        color = '#a8dadc';
        // eslint-disable-next-line
      } else if(found.fields.Mood == 3){
        color = '#77abbd';
        // eslint-disable-next-line
      } else if (found.fields.Mood == 4) {
        color = '#457b9d';
        // eslint-disable-next-line
      } else if(found.fields.Mood == 5){
        color = '#31587a';
      };

      return <div className="Day" style={{backgroundColor: color}}> {day.date} </div>
    } else {
      return <div className="Day"> {day.date} </div>      
    }
  }

  return (

      <div className="CalendarHolder">

      <div className="MonthContainer">
            <p>
              {monthName}  {monthYear}
              <br />
            {button () }      
            <button className='MonthChange' onClick={() => setCount(count + 1)}> Next Month</button>
            </p>
      </div>
      
          <div className="WeekHolder">
            <div className="WeekDay">Sunday</div>
            <div className="WeekDay">Monday</div>
            <div className="WeekDay">Tuesday</div>
            <div className="WeekDay">Wednesday</div>
            <div className="WeekDay">Thursday</div>
            <div className="WeekDay">Friday</div>
            <div className="WeekDay">Saturday</div>
          </div>
        

      {monthArray.map((day, index) => {
        return (displayDate(day))
      })}
    </div>
  );
}