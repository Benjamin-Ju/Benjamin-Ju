import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExpensesService {

  constructor() { }

  expenses: { [id: string]:  string[] } = {
    // date format: MM/DD/YYYY
    "04/29/2019": [
      "$33.38 - Groceries"
    ],
    "05/01/2019": [
      "$29.00 - Groceries",
      "$29.37 - Gym"
    ],
    "05/02/2019": [
      "$50.00 - Gym"
    ],
    "05/03/2019": [
      "$41.62 - Groceries"
    ],
    "05/06/2019": [
      "$36.27 - Groceries"
    ],
    "05/08/2019": [
      "$12.27 - Groceries"
    ],
    "05/10/2019": [
      "$7.00 - Lunch",
      "$17.00 - Bus Ticket",
      "$10.00 - Lazeez"
    ],
    "05/11/2019": [
      "$9.00 - Tim Horton's"
    ],
    "05/12/2019": [
      "$21.56 - Groceries"
    ],
    "05/14/2019": [
      "$15.63 - Groceries"
    ],
    "05/16/2019": [
      "$19.58 - Groceries"
    ],
    "05/17/2019": [
      "$110.80 - Skin Care",
      "$29.37 - Gym Membership"
    ],
    "05/19/2019": [
      "$20.62 - Groceries"
    ],
    "05/21/2019": [
      "$7.00 - Lunch"
    ],
    "05/23/2019": [
      "$51.31 - Groceries"
    ],
    "05/25/2019": [
      "$34.58 - Groceries"
    ],
    "05/29/2019": [
      "$29.76 - Groceries",
      "$29.37 - Gym"
    ],
    "05/31/2019": [
      "$34.94 - Groceries",
    ],
  };

  getExpenses(date) {
    if (this.expenses[date]) {
      return this.expenses[date]
    } else {
      return ["No expenses on this date"]
    }
  }
}
