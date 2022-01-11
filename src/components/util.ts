export const MONTHS_SHORT = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
];

export const getShortMonthStr = (monthRequested: number) => {
  return (MONTHS_SHORT[monthRequested - 1]); // monthRequested is 1-indexed
}

export const DAYS_PER_MONTH = [
  31,
  29,
  31,
  30,
  31,
  30,
  31,
  31,
  30,
  31,
  30,
  31
];

export const getDaysBetweenDates = (startDate: date, endDate: date) => {
  const msInDay = 1000 * 60 * 60 * 24;
  const today = new Date;
  if ((!startDate.year) || (!endDate.year)) {
    // If either are missing year, set both years to this year
    startDate.year = today.getFullYear();
    endDate.year = today.getFullYear();
  }
  // Use UTC dates so daylights savings is ignored
  // Date.UTC takes month 0-indexed
  const startDateUTC = Date.UTC(startDate.year, (startDate.month - 1), startDate.day);
  const endDateUTC = Date.UTC(endDate.year, (endDate.month - 1), endDate.day);
  return (endDateUTC - startDateUTC) / msInDay
}

export const todayAsDateDmy = () => {
  const today = new Date
  const dateDmy: date = {
    day: today.getDate(),
    month: (today.getMonth() + 1),
    year: today.getFullYear()
  }
  return dateDmy;
}

export const stripYear = (date: date) => {
  delete date.year;
  return date;
}

export const getDaysUntil = (untilDate: date) => {
  // Return days until date, if is negative date has already occurred this yr,
  // wrap around yr by adding 365 days
  const dateDifference = getDaysBetweenDates(todayAsDateDmy(), stripYear(untilDate));
  if (dateDifference <= 0) {
    return Math.abs(dateDifference) + 365
  }
  else {
    return dateDifference
  }
}

export interface birthdayEntry {
  name: string;
  birthday: date;
}

export interface date {
  day: number;
  month: number; // 1 = Jan, 2 = Feb, etc.
  year?: number;
}

export const testBirthdayData: Array<birthdayEntry> = [
  {
    name: "Alsion Wadkins",
    birthday: {
      month: 1,
      day: 1
    }
  },
  {
    name: "Wollum Wadkins",
    birthday: {
      month: 11,
      day: 26,
      year: 1990
    }
  },
  {
    name: "Hunter Wadkins",
    birthday: {
      month: 6,
      day: 15,
      year: 2012
    }
  },
  {
    name: "Franky Wadkins",
    birthday: {
      month: 9,
      day: 11,
      year: 2020
    }
  }
]