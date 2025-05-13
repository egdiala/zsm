import moment from "moment";
moment().format();

export const formatTime = (timeStamp: string) => {
  const fullDate = (() => moment(timeStamp).format("LL"))();
  const fullDateTime = (() => moment(timeStamp).format("MMM Do YYYY, h:mm a"))();
  const fullTime = (() => moment(timeStamp).format("h:mma"))();

  //kinda separated
  const duration = moment.duration(timeStamp, "seconds");
  const hours = Math.floor(duration.asHours());
  const minutes = duration.minutes();
  const secs = duration.seconds();
  const secondsTofullTime = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;

  return {
    fullDate: timeStamp ? fullDate : "",
    fullDateTime: timeStamp ? fullDateTime : "",
    fullTime: timeStamp ? fullTime : "",
    secondsTofullTime,
  };
};

export const getFirstDayOfMonth = () => {
  const date = new Date();
  const firstDay = new Date(date.getFullYear(), date.getMonth() + 1, 1);
  const month = date.getMonth().toString().length === 1 && date.getMonth().toString() !== "9" ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
  const day = firstDay.getDate().toString().length === 1 ? "0" + firstDay.getDate() : firstDay.getDate();
  const year = date.getFullYear();
  return `${year}-${month}-${day}`;
};

export const getLastDayOfMonth = () => {
  const date = new Date();
  const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
  const month = date.getMonth().toString().length === 1 && date.getMonth().toString() !== "9" ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
  const day = lastDay.getDate().toString().length === 1 ? "0" + lastDay.getDate() : lastDay.getDate();
  const year = date.getFullYear();
  return `${year}-${month}-${day}`;
};

export const getTodayDate = () => {
  const date = new Date();
  const month = date.getMonth().toString().length === 1 && date.getMonth().toString() !== "9" ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
  const day = date.getDate().toString().length === 1 ? "0" + date.getDate() : date.getDate();
  const year = date.getFullYear();
  return `${year}-${month}-${day}`;
};

export const getYesterdayDate = () => {
  const date = new Date();
  date.setDate(date.getDate() - 1); // Subtract one day to get yesterday's date

  const month = date.getMonth().toString().length === 1 && date.getMonth().toString() !== "9" ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
  const day = date.getDate().toString().length === 1 ? "0" + date.getDate() : date.getDate();
  const year = date.getFullYear();

  return `${year}-${month}-${day}`;
};

export const getFirstDayOfTheYear = () => moment(new Date(new Date().getFullYear(), 0, 1)).format("YYYY-MM-DD");
export const getLastDayOfTheYear = () => moment(new Date(new Date().getFullYear(), 11, 31)).format("YYYY-MM-DD");

export const momentAgo = (timestamp: string) => {
  return moment(timestamp).fromNow();
};

const MonthDays = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];

let timeZone = (date: string) => {
  var dbDate = new Date(date);
  var timeOffsetInMS = dbDate.getTimezoneOffset() * 60000;
  dbDate.setTime(dbDate.getTime() - timeOffsetInMS);
  return date;
};

export const calculatePostDate = (date: string, format?: string) => {
  if (!date) {
    return;
  }
  let DateNow: any = new Date(); // current date
  // let postedDate = new Date(date); // date posted
  let postedDate: any = new Date(timeZone(date)); // date posted
  let postedTime = date.indexOf("T") > -1 ? date.substr(date.indexOf("T") + 1, 5) : ""; //get the time
  let postedMnth = MonthDays[postedDate.getMonth()]; //get the month
  let postedYear = postedDate.getFullYear(); //get the year
  let postedDay = postedDate.getDate(); //get the date of the month
  let dnDay = DateNow.getDate();
  let rDate: any = null;
  let sDate = (DateNow - postedDate) / 1000; //get the seconds of in the date
  let outputDate = null;

  if (sDate >= 86400) {
    // if days

    rDate = parseInt(String(Math.round(sDate / 86400)));
    switch (format) {
      case "date-only":
        outputDate = rDate === 1 ? "Yesterday" : `${postedMnth} ${postedDay}, ${postedYear}`;
        break;
      default:
        outputDate = rDate === 1 ? "Yesterday " + postedTime : `${postedMnth} ${postedDay}, ${postedYear} ${postedTime}`;
    }
  } else if (sDate >= 3600) {
    //if hours
    rDate = parseInt(String(Math.round(sDate / 3600)));
    switch (format) {
      case "date-only":
        outputDate = dnDay === postedDay ? "Today" : "Yesterday";
        break;
      default:
        outputDate = rDate + " hr ago";
    }
  } else if (sDate >= 60) {
    //if minuntes
    rDate = parseInt(String(Math.round(sDate / 60)));
    switch (format) {
      case "date-only":
        outputDate = dnDay === postedDay ? "Today" : "Yesterday";
        break;
      default:
        outputDate = rDate + " min ago";
    }
  } else {
    //if seconds
    rDate = Math.ceil(sDate);
    switch (format) {
      case "date-only":
        outputDate = dnDay === postedDay ? "Today" : "Yesterday";
        break;
      default:
        outputDate = sDate < 1 ? "1 sec ago" : rDate + " sec ago";
    }
  }
  return outputDate;
};

export const calculatePostDay = (date: string) => {
  if (!date) {
    return;
  }
  const postedDate = new Date(date);
  if (isNaN(postedDate.getTime())) {
    return null;
  }

  const postedMnth = MonthDays[postedDate.getUTCMonth()];
  const postedYear = postedDate.getUTCFullYear();
  const postedDay = postedDate.getUTCDate();
  return `${postedMnth} ${postedDay}, ${postedYear}`;
};

export const calculatePostedDate = (date: string) => {
  if (!date) {
    return;
  }
  let postedDate: any = new Date(timeZone(date)); // date posted
  let postedMonth = postedDate.getMonth() + 1; // get the month
  let postedYear = postedDate.getFullYear(); // get the year
  let postedDay = postedDate.getDate(); // get the date of the month
  let outputDate = null;
  const formattedMonth = postedMonth < 10 ? `0${postedMonth}` : postedMonth;
  const formattedDay = postedDay < 10 ? `0${postedDay}` : postedDay;

  outputDate = `${postedYear}-${formattedMonth}-${formattedDay}`;

  return outputDate;
};

export const calculateMonthYearDate = (date: string) => {
  if (!date) {
    return;
  }
  let DateNow: any = new Date(); // current date
  // let postedDate = new Date(date); // date posted
  let postedDate: any = new Date(timeZone(date)); // date posted
  let postedMnth = MonthDays[postedDate.getMonth()]; // get the month
  let postedYear = postedDate.getFullYear(); // get the year
  let dnDay = DateNow.getDate();
  let sDate = (DateNow - postedDate) / 1000; // get the seconds in the date
  let outputDate = null;

  if (sDate >= 86400) {
    // if days
    let rDate = parseInt(String(Math.round(sDate / 86400)));
    outputDate = rDate === 1 ? "Yesterday" : `${postedMnth}, ${postedYear}`;
  } else if (sDate >= 3600) {
    // if hours
    // let rDate = parseInt(String(Math.round(sDate / 3600)));
    outputDate = dnDay === postedDate.getDate() ? "Today" : "Yesterday";
  } else if (sDate >= 60) {
    // if minutes
    // let rDate = parseInt(String(Math.round(sDate / 60)));
    outputDate = dnDay === postedDate.getDate() ? "Today" : "Yesterday";
  } else {
    // if seconds
    let rDate = Math.ceil(sDate);
    outputDate = sDate < 1 ? "1 sec ago" : rDate + " sec ago";
  }

  return outputDate;
};

export const getCurrentMonthAndYear = () => {
  const date = new Date();
  // const firstDay = new Date(date.getFullYear(), date.getMonth() + 1, 1);
  const month = date.getMonth().toString().length === 1 && date.getMonth().toString() !== "9" ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
  // const day = firstDay.getDate().toString().length === 1 ? "0" + firstDay.getDate() : firstDay.getDate();
  const year = date.getFullYear();
  return `${year}-${month}`;
};

export const formatByDateType = (timeStamp: string, dateType: string) => {
  if (dateType === "monthly") {
    return moment(timeStamp).format("MMM YYYY");
  } else if (dateType === "yearly") {
    return moment(timeStamp).format("YYYY");
  } else {
    return moment(timeStamp).format("MMM Do YYYY");
  }
};

moment().format("MMM Do YY");

export const convertSecsToFulTime = (secs: string) => {
  let sec_num = parseInt(secs, 10); // don't forget the second param
  let hours: string | number = Math.floor(sec_num / 3600);
  let minutes: string | number = Math.floor((sec_num - hours * 3600) / 60);
  let seconds: string | number = sec_num - hours * 3600 - minutes * 60;

  if (hours < 10) {
    hours = "0" + hours;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  return hours + ":" + minutes + ":" + seconds;
};
