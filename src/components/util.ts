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

export const getShortMonthStr = (monthRequested: number): string => {
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

export const getDaysBetweenDates = (startDate: date, endDate: date): number => {
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

export const todayAsDateDmy = (): date => {
  const today = new Date
  const dateDmy: date = {
    day: today.getDate(),
    month: (today.getMonth() + 1),
    year: today.getFullYear()
  }
  return dateDmy;
}

export const stripYear = (date: date): date => {
  delete date.year;
  return date;
}

export const getDaysUntilYearWrapped = (untilDate: date): number => {
  /* Return days until date,
  if is negative date has already occurred this yr,
  so wrap around yr by adding 365 days*/
  const dateDifference = getDaysBetweenDates(todayAsDateDmy(), stripYear(untilDate));
  if (dateDifference < 0) {
    return Math.abs(dateDifference) + 365
  }
  else {
    return dateDifference
  }
}

export const validateDate = (date: date): boolean => {
  /* Return T if date exists*/
  // TODO Write me
  return true;
}

export interface birthdayEntry {
  name: string;
  birthday: date;
  uuid?: string;
}

export interface date {
  day: number;
  month: number; // 1 = Jan, 2 = Feb, etc.
  year?: number;
}

export const testBirthdayData: Array<birthdayEntry> = [
  {
    name: "United States",
    birthday: {
      month: 7,
      day: 4
    },
    uuid: "test-uid-1"
  },
  {
    name: "Rosa Parks",
    birthday: {
      month: 2,
      day: 4,
      year: 1913
    },
    uuid: "test-uid-2"
  },
  {
    name: "Marshall Mathers III",
    birthday: {
      month: 10,
      day: 17,
      year: 1972
    },
    uuid: "test-uid-3"
  },
  {
    name: "Mary Putnam Jacobi",
    birthday: {
      month: 8,
      day: 31,
      year: 1842
    },
    uuid: "test-uid-4"
  },
  {
    name: "Sergey Bubka",
    birthday: {
      month: 12,
      day: 4,
      year: 1963
    },
    uuid: "test-uid-5"
  }
]