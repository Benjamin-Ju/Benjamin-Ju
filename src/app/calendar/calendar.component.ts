import { Component, ChangeDetectionStrategy, OnInit} from '@angular/core';
import { CalendarEvent } from 'angular-calendar';
import { CalendarSchedulesService } from '../../services/calendar-schedules.service'
import { ExpensesService } from 'src/services/expenses.service';
import { NgbDateParserFormatter, NgbCalendar, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';


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
    this.model = this.calendar.getToday();
    this.checkSchedule(this.model)
  }

  model: NgbDateStruct;

  constructor(private calendarService: CalendarSchedulesService, private expenseService: ExpensesService, private ngbDateParserFormatter: NgbDateParserFormatter, private calendar: NgbCalendar) { }

  view: string = 'month';

  viewDate: Date = new Date();

  events: CalendarEvent[] = [];

  displayDate: string;

  schedule: string[]

  expenses: string[]

  checkSchedule(clickedDate) {
    this.displayDate = this.ngbDateParserFormatter.format(clickedDate)
    let date = this.displayDate.substring(5,7)+"/"+this.displayDate.substring(8)+"/"+this.displayDate.substring(0,4)
    if (date) {
      this.schedule = this.calendarService.getSchedule(date)
      this.expenses = this.expenseService.getExpenses(date)
    } else {
      this.schedule = ["No Date Selected"]
    }
  }

}
