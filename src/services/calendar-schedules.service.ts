import { Injectable } from '@angular/core';
import { scheduleMicroTask } from '@angular/core/src/util';

@Injectable({
  providedIn: 'root'
})
export class CalendarSchedulesService {

  constructor() { }

  schedules: { [id: string]:  string[] } = {
    "04/01/2019": [
      "6:00am - 7:00am Chill",
      "7:00am - 8:30am Eat, Dishes, Shower, Meditation",
      "8:30am - 9:05am Transit to Work",
      "9:05am - 5:00pm Work",
      "5:00pm - 5:25pm Eat",
      "5:25pm - 6:13pm Groceries, Transit",
      "6:13pm - 7:00pm Chill, Couponing, GRT stuff",
      "7:00pm - 7:30pm Chill",
      "7:30pm - 7:45pm Meditate",
      "7:45pm - 8:30pm Chill",
      "8:30pm - 9:30pm Cook",
      "9:30pm - 10:00pm Shower",
      "10:00pm - 11:00pm Eat, Pack, Teeth Stuff",
    ]
  };

  getSchedule(date) {
    if (this.schedules[date]) {
      return this.schedules[date]
    } else {
      return ["No schedule available"]
    }
  }

}
