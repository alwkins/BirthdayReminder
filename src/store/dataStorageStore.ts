import { birthdayEntry, testBirthdayData } from "../components/util";
import 'react-native-get-random-values'; // This must be before uuid import, see https://github.com/uuidjs/uuid/issues/514
import { v4 as uuidv4 } from 'uuid';

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
    // GET
    this.birthdays = testBirthdayData;
  }

  getBirthdays = () => {
    return this.birthdays;
  }

  addBirthday = (newEntry: birthdayEntry) => {
    // POST
    this.birthdays.push({
      ...newEntry,
      uuid: uuidv4()
    });
  }

  deleteBirthday = (uuid: string) => {
    // DELETE
    // TODO store UUID indices in map order to optimize
    return this.birthdays.find((birthday) => birthday.uuid === uuid)
  }

  replaceBirthday = (uuid: string, editedBirthday: birthdayEntry) => {
    // PUT
    const birthdayIndex = this.birthdays.findIndex((birthday) => birthday.uuid === uuid)
    editedBirthday.uuid = uuid // Ensure uuid is preserved
    this.birthdays[birthdayIndex] = editedBirthday
  }
}