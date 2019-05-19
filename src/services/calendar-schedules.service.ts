import { Injectable } from '@angular/core';
import { scheduleMicroTask } from '@angular/core/src/util';

@Injectable({
  providedIn: 'root'
})
export class CalendarSchedulesService {

  constructor() { }

  schedules: { [id: string]:  string[] } = {
    "04/01/2019": [
      "06:00am - 07:00am Chill",
      "07:00am - 08:30am Eat, Dishes, Shower, Meditation",
      "08:30am - 09:05am Transit to Work",
      "09:05am - 05:00pm Work",
      "05:00pm - 05:25pm Eat",
      "05:25pm - 06:13pm Groceries, Transit",
      "06:13pm - 07:00pm Chill, Couponing, GRT stuff",
      "07:00pm - 07:30pm Chill",
      "07:30pm - 07:45pm Meditate",
      "07:45pm - 08:30pm Chill",
      "08:30pm - 09:30pm Cook",
      "09:30pm - 10:00pm Shower",
      "10:00pm - 11:00pm Eat, Pack, Teeth Stuff",
    ],
    "03/30/2019": [
      "04:30am - 05:45am Leisure",
      "05:45am - 07:15am Cooking, Eating, Dishes",
      "07:15am - 07:30am Packing",
      "07:30am - 07:50am Bus",
      "07:50am - 10:10am Gym",
      "10:10am - 10:30am Bus",
      "10:30am - 11:00am Leisure",
      "11:00am - 11:30am Laundry, Nails",
      "11:30am - 12:00pm Reading",
      "12:00pm - 03:15pm Tetris",
      "03:15pm - 03:35pm Eat",
      "03:35pm - 03:50pm Chill",
      "03:50pm - 07:00pm Leisure",
      "07:00pm - 07:20pm Eat",
      "07:20pm - 07:30pm Laundry",
      "07:30pm - 08:15pm Laundry",
      "08:15pm - 09:00pm Chill",
      "09:00pm - 10:00pm Reading",
    ],
  };

  getSchedule(date) {
    if (this.schedules[date]) {
      return this.schedules[date]
    } else {
      return ["No schedule available"]
    }
  }

}
