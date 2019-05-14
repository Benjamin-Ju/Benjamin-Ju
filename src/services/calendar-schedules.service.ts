import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalendarSchedulesService {

  constructor() { }

  schedules: { [id: string]: { [id: string]: string;}; } = {
    "2019-01-04": {
      "9:30am - 10:00am": "waking up"
    }
  };

}
