import { birthdayEntry, testBirthdayData } from "../components/util";

export default class DataStorageStore {
  private static instance: DataStorageStore;
  private birthdays: Array<birthdayEntry> = [];

  static getInstance(): DataStorageStore {
    if (!DataStorageStore.instance) {
      DataStorageStore.instance = new DataStorageStore();
    }
    return DataStorageStore.instance;
  }

  loadBirthdays = async () => {
    this.birthdays = testBirthdayData;
  }

  getBirthdays = () => {
    return this.birthdays;
  }

  addBirthday = (newEntry: birthdayEntry) => {
    this.birthdays.push(newEntry);
  }
}