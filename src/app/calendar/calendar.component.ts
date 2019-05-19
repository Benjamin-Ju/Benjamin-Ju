import { Component, ChangeDetectionStrategy, OnInit} from '@angular/core';
import { CalendarEvent } from 'angular-calendar';
import { CalendarSchedulesService } from '../../services/calendar-schedules.service'
import { ExpensesService } from 'src/services/expenses.service';

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
    this.checkSchedule(new Date())
  }

  constructor(private calendarService: CalendarSchedulesService, private expenseService: ExpensesService) { }

  view: string = 'month';

  viewDate: Date = new Date();

  events: CalendarEvent[] = [];

  clickedDate: string;

  schedule: string[]

  expenses: string[]

  checkSchedule(clickedDate) {
    this.clickedDate = clickedDate
    let date = clickedDate.toLocaleString('en-US', { year:'numeric', month:'2-digit', day:'2-digit' }).substring(0,10)
    if (date) {
      console.log(date)
      this.schedule = this.calendarService.getSchedule(date)
      this.expenses = this.expenseService.getExpenses(date)
    } else {
      this.schedule = ["No Date Selected"]
    }
  }

}
