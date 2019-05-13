import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { CalendarEvent } from 'angular-calendar';

const colors: any = {
  red: {
    primary: '#ad2121',
    secondary: '#FAE3E3'
  },
  blue: {
    primary: '#1e90ff',
    secondary: '#D1E8FF'
  },
  yellow: {
    primary: '#e3bc08',
    secondary: '#FDF1BA'
  }
};

@Component({
  selector: 'app-calendar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './calendar.component.html',
})
export class CalendarComponent implements OnInit {

  ngOnInit() {
  }

  constructor() { }

  view: string = 'month';

  viewDate: Date = new Date();

  events: CalendarEvent[] = [];

  clickedDate: Date;

  checkSchedule(clickedDate) {
    return clickedDate
  }

}
