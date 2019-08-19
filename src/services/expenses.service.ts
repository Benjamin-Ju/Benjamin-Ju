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
    "06/03/2019": [
      "$28.07 - Groceries",
      "$10.00 - Lazeez",
    ],
    "06/05/2019": [
      "$7.83 - Groceries",
      "$5.64 - DQ",
    ],
    "06/06/2019": [
      "$9.93 - iPotato",
      "$7.00 - Lunch",
    ],
    "06/07/2019": [
      "$30.60 - Groceries",
      "$3.77 - Tim Hortons",
    ],
    "06/08/2019": [  
      "$89.25 - Driving Test",
    ],
    "06/09/2019": [  
      "$9.93 - iPotato",
      "$8.01 - Groceries",
      "$4.96 - Tim Hortons",
    ],
    "06/10/2019": [  
      "$21.24 - Groceries",
    ],
    "06/12/2019": [  
      "$16.10 - Groceries",
      "$29.37 - Gym",
    ],
    "06/15/2019": [  
      "$24.35 - Groceries",
    ],
    "06/16/2019": [  
      "$45 - Contacts Solution",
    ],
    "06/17/2019": [  
      "$21.24 - Groceries",
    ],
    "06/19/2019": [  
      "$17.00 - Groceries",
    ],
    "06/21/2019": [  
      "$17.95 - Groceries",
    ],
    "06/23/2019": [  
      "$20.40 - Groceries",
    ],
    "06/24/2019": [  
      "$30.73 - Groceries",
    ],
    "06/26/2019": [  
      "$16.82 - Groceries",
      "$29.37 - Gym"
    ],
    "06/28/2019": [  
      "$37.24 - Groceries",
    ],
    "07/01/2019": [  
      "$19.22 - Groceries",
    ],
    "07/03/2019": [  
      "$41.21 - Groceries",
      "$5.64 - Milkshake",
    ],
    "07/05/2019": [  
      "$20.67 - Groceries",
    ],
    "07/08/2019": [  
      "$21.02 - Groceries",
    ],
    "07/10/2019": [  
      "$27.45 - Groceries",
      "$29.37 - Gym",
    ],
    "07/12/2019": [  
      "$10.77 - Groceries",
    ],
    "07/14/2019": [  
      "$11.24 - iPotato",
    ],
    "07/15/2019": [  
      "$15.12 - Groceries",
    ],
    "07/17/2019": [  
      "$35.96 - Groceries",
    ],
    "07/18/2019": [  
      "$8.75 - Lunch",
    ],
    "07/19/2019": [  
      "$8.10 - Lunch",
    ],
    "07/21/2019": [  
      "$11.38 - Groceries",
      "$13.56 - Dinner",
    ],
    "07/23/2019": [  
      "$9.50 - Groceries",
    ],
    "07/24/2019": [  
      "$12.40 - Groceries",
    ],
    "07/25/2019": [  
      "$29.37 - Gym",
    ],
    "07/27/2019": [  
      "$17.00 - Groceries",
    ],
    "07/31/2019": [  
      "$18.93 - Groceries",
    ],
    "08/06/2019": [  
      "$19.62 - Groceries",
    ],
    "08/08/2019": [  
      "$7.63 - Groceries",
    ],
    "08/09/2019": [  
      "$27.77 - Groceries",
      "$10.16 - Detergent",
    ],
    "08/10/2019": [  
      "$19.62 - Groceries",
    ],
    "08/11/2019": [  
      "$12.00 - MeetFresh",
    ],
    "08/12/2019": [  
      "$21.55 - Groceries",
    ],
    "08/14/2019": [  
      "$21.63 - Groceries",
    ],
    "08/16/2019": [  
      "$24.52 - Groceries",
      "$71.18 - Protein Powder",
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
