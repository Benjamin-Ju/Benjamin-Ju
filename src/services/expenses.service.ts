import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExpensesService {

  constructor() { }

  expenses: { [id: string]:  string[] } = {
    // date format: MM/DD/YYYY
    "05/17/2019": [
      "$110.80 - Skin Care",
      "$29.37 - Gym Membership"
    ]
  };

  getExpenses(date) {
    if (this.expenses[date]) {
      return this.expenses[date]
    } else {
      return ["No expenses on this date"]
    }
  }
}
