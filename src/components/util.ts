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
  return 0;
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
      year: 2010
    }
  },
  {
    name: "Franky Wadkins",
    birthday: {
      month: 2,
      day: 14,
      year: 2020
    }
  }
]