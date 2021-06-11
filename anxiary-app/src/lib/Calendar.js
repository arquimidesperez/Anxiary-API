const moment = require("moment");

const TIME = moment();

class MonthViewCalender {
  constructor(month = TIME) {
    // eslint-disable-next-line
    this.now = typeof month == "string" ? eval(month) : month;
    this.monthName = this.now.format("MMMM");
    this.monthNumber = this.now.format("MM");
    this.yearNumber = this.now.format("YYYY");
    this.dateOfMonth = typeof month == "string" ? null : this.now.date();
    this.lengthOfThisMonth = this.now.daysInMonth();
    this.monthStartWeekDay = this.now.date(1).weekday();
    this.monthEndWeekDay = this.now.date(this.lengthOfThisMonth).weekday();
    this.weekday = this.now.weekday();
    this.lengthOfLastMonth = this.now.subtract(1, "month").daysInMonth();
  }
  // builds an array of date objects
  monthArray() {
    let month = this.monthNumber;
    let year = this.yearNumber;
    let length = this.lengthOfLastMonth;
    let start = this.monthStartWeekDay;
    let difference = length - start;
    let array = [];
    // Add dates of last month to array
    if (start !== 0) {
      for (let v = difference + 1; v <= length; v++) {
        array.push(this.buildDateObject(v, -1));
      }
    }
    for (let v = 1; v <= this.lengthOfThisMonth; v++) {
      array.push(this.buildDateObject(v, 0, month, year));
    }
    // adds dates of next month to array
    if (this.monthEndWeekDay !== 6) {
      let d = this.monthEndWeekDay;
      let count = 1;
      for (let v = d; v < 6; v++) {
        array.push(this.buildDateObject(count, +1));
        count += 1;
      }
    }
    return array;
  }
  buildDateObject(day = "", last = 0, month, year) {
    //2021-06-01
    let obj = {};
    if (day < 10) {
      day = `0${day}`
    }
    obj.date = day;
    obj.month = last;
    obj.formattedDate = `${year}-${month}-${day}`;
    return obj;
  }
  currentDateOfMonth() {
    return moment().date();
  }
}

module.exports = MonthViewCalender;