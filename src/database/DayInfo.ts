import { PublicHoliday } from "../common/interfaces";
import NameDays from "./NameDays";
import PublicHolidays from "./PublicHolidays";

class DayInfo {
  constructor(
    private nameDays: NameDays,
    private publicHolidays: PublicHolidays
  ) {}

  public getDayInfo(): string {
    const date: string = this.getCurrentDate();
    const names: string[] = this.nameDays.getNameDay(date);
    const publicHoliday: PublicHoliday =
      this.publicHolidays.getPublicHoliday(date);
    let dayInfo: string = `Dnes je ${date} `;

    if (names) {
      dayInfo += `Svátek má: ${names.join(", ")}. Gratulujeme!\n`;
    }

    if (publicHoliday) {
      dayInfo += `Státní svátek: ${publicHoliday.name}!\n${publicHoliday.description}\n`;
    }

    return dayInfo;
  }

  private getCurrentDate(): string {
    const date = new Date();

    return `${date.getDate()}. ${date.getMonth() + 1}.`;
  }
}

export default DayInfo;
