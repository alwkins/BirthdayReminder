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

export interface birthdayEntry {
  name: string;
  birthday: Date;
}

export const testBirthdayData: Array<birthdayEntry> = [
  {
    name: "Alsion Wadkins",
    birthday: new Date("2021-10-31")
  },
  {
    name: "Wollum Wadkins",
    birthday: new Date("1992-11-26")
  },
  {
    name: "Hunter Wadkins",
    birthday: new Date("2011-12-15")
  },
  {
    name: "Franky Wadkins",
    birthday: new Date("2017-1-12")
  }
]