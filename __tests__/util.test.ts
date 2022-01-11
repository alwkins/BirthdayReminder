import {describe, expect, it } from '@jest/globals';
import { getShortMonthStr, getDaysBetweenDates, todayAsDateDmy, stripYear } from '../src/components/util';

jest.disableAutomock();

describe("Birthday Utility Functions", () => {

  test("Get short month str for Jan", () => {
    expect(getShortMonthStr(1)).toBe('Jan');
  });
  test("Get short month str for Dec", () => {
    expect(getShortMonthStr(12)).toBe("Dec");
  });
  test("Get short month invalid input: negative", () => {
    expect(getShortMonthStr(-5)).toBe(undefined);
  });
  test("Get short month invalid input: out of range", () => {
    expect(getShortMonthStr(100)).toBe(undefined);
  });

  const startRevWar = {
    month: 7, // July
    day: 4,
    year: 1776
  }
  const endRevWar = {
    month: 9, // Sep
    day: 3,
    year: 1783
  }

  test("Get days between dates year included", () => {
    expect(getDaysBetweenDates(startRevWar, endRevWar)).toBe(2617)
  });
  test("End date is before start date", () => {
    expect(getDaysBetweenDates(endRevWar, startRevWar)).toBe(-2617);
  })
  test("Get days between dates, no days", () => {
    expect(getDaysBetweenDates(startRevWar, startRevWar)).toBe(0);
  })

  const startNoYrSimple = {
    month: 10, // Oct
    day: 1
  }

  const endNoYrSimple = {
    month: 11, // Nov
    day: 30
  }

  // Create date periods over Feb for both leap and non-leap years
  const startNoYrFeb = {
    month: 2, // Feb
    day: 1
  }
  const endNoYrFeb = {
    month: 3, // Mar
    day: 1
  }

  const nonLeapYear = 2018;
  const leapYear = 2020;

  const startNonLeap = {
    ...startNoYrFeb,
    year: nonLeapYear
  }
  const endNonLeap = {
    ...endNoYrFeb,
    year: nonLeapYear
  }

  const startLeap = {
    ...startNoYrFeb,
    year: leapYear
  }
  const endLeap = {
    ...endNoYrFeb,
    year: leapYear
  }

  test("Get days between dates no years, no special cases", () => {
    expect(getDaysBetweenDates(startNoYrSimple, endNoYrSimple)).toBe(60);
  });
  test("Get days between dates, non-leap year", () => {
    expect(getDaysBetweenDates(startNonLeap, endNonLeap)).toBe(28);
  });
  test("Get days between dates, leap year", () => {
    expect(getDaysBetweenDates(startLeap, endLeap)).toBe(29);
  });

  test("Strip year", () => {
    expect(stripYear(startLeap)).toStrictEqual(startNoYrFeb);
  })

  /*
  // Expected value will change daily, so disable from running every time
  test("Get today as date day-month-year object", () => {
      expect(todayAsDateDmy()).toStrictEqual({
        day: 10,
        month: 1,
        year: 2022
      })
    }) */
})