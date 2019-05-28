import { Injectable } from '@angular/core';
import { scheduleMicroTask } from '@angular/core/src/util';

@Injectable({
  providedIn: 'root'
})
export class CalendarSchedulesService {

  constructor() { }

  schedules: { [id: string]:  string[] } = {
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
      "07:30pm - 08:15pm Reading",
      "08:15pm - 09:00pm Chill",
      "09:00pm - 10:00pm Reading",
      "10:00pm - 10:30pm Shower",
    ],
    "03/31/2019": [
      "05:00am - 06:00am Chill",
      "06:00am - 07:45am Cooking",
      "07:45am - 08:20am Eating",
      "08:20am - 09:15am Chill",
      "09:15am - 09:45am Shower",
      "09:45am - 10:10am Chill",
      "10:10am - 10:25am Organizing Birthday Pictures",
      "10:25am - 04:30am Cleaning Room",
      "04:30pm - 05:15pm Leisure",
      "05:15pm - 07:15pm Maplestory",
      "07:15pm - 08:00pm Shower",
      "08:00pm - 12:00am Chill",
    ],
    "04/01/2019": [
      "06:00am - 06:30am Looking at Phone",
      "06:30am - 06:45am Cooking Rice",
      "06:45am - 07:15am Shower",
      "07:15am - 08:10am Cooking",
      "08:10am - 08:30am Eating, Dishes",
      "08:30am - 09:15am Transit, Dropping Stuff Off",
      "09:15am - 05:05am Work",
      "05:05pm - 05:50pm Groceries, Transit",
      "05:50pm - 06:00pm Chores",
      "06:00pm - 07:00pm Chill",
      "07:00pm - 07:40pm Shower",
      "07:40pm - 8:30am Chill",
    ],
    "04/02/2019": [
      "06:45am - 07:15am Shower",
      "07:15am - 08:40am Cook, Eat, Dishes",
      "08:40am - 09:00am Transit",
      "09:00am - 05:00pm Work",
      "05:00pm - 05:45pm Transit",
      "05:45pm - 06:15pm Food",
      "06:15pm - 06:45pm Chill",
      "06:45pm - 08:45pm Wings w/ Allen and Ryan",
      "08:45pm - 09:15pm Call Parents",
      "09:15pm - 09:30pm Tetris",
      "09:30pm - 10:00pm Shower",
      "10:00pm - 10:30pm Manga",
    ],
    "04/03/2019": [
      "06:50am - 07:00am Cooking Rice",
      "07:00am - 07:35am Shower",
      "07:35am - 08:45am Cook, Eat, Dishes",
      "08:45am - 09:05am Transit",
      "09:05am - 05:00pm Work",
      "05:00pm - 05:40pm Transit",
      "05:40pm - 06:25pm Chill",
      "06:25pm - 06:45pm Shower",
      "06:45pm - 07:05pm Eat",
      "07:05pm - 07:30pm Tetris",
      "07:30pm - 08:00pm Work Report",
    ],
    "04/04/2019": [
      "04:15am - 06:00am Cook, Eat, Dishes",
      "06:00am - 06:35am Transit",
      "06:35am - 08:00am Gym",
      "08:00am - 08:30am Shower",
      "08:30am - 08:45am Transit",
      "08:45am - 05:00pm Work",
      "05:00pm - 06:15pm Transit, Groceries",
      "06:15pm - 06:50pm Chill",
      "06:50pm - 07:15pm Shower",
      "07:15pm - 08:20pm Tetris",
    ],
    "04/05/2019": [
      "04:30am - 05:30am Chill",
      "05:30am - 06:00am Shower",
      "06:00am - 07:20am Cook, Eat, Dishes",
      "07:20am - 08:35am Tetris",
      "08:35am - 09:10am Transit",
      "09:10am - 05:00pm Work",
      "05:00pm - 05:35pm Transit",
      "05:35pm - 06:00pm Chill",
      "06:00pm - 06:35pm Shower",
      "06:35pm - 06:55pm Food",
      "06:55pm - 07:20pm Chill",
      "07:20pm - 08:00pm Work Report",
      "08:00pm - 08:20pm Tetris",
    ],
    "04/06/2019": [
      "04:15am - 05:00am Chill",
      "05:00am - 06:30am Cook, Eat, Dishes",
      "06:30am - 07:00am Transit",
      "07:00am - 09:00am Gym",
      "09:00am - 09:30am Shower",
      "09:30am - 10:00am Transit",
      "10:00am - 10:15am Eat, Dishes",
      "10:15am - 10:25am Laundry",
      "10:25am - 11:00am Tetris",
      "11:00am - 12:00pm Work Report",
      "12:00pm - 12:30pm Chill",
      "12:30pm - 01:50pm Work Report",
      "01:50pm - 02:20pm Eat",
      "02:20pm - 03:35pm Chill",
      "03:35pm - 04:20pm Laundry",
      "04:20pm - 05:00pm Reading",
      "05:00pm - 08:00pm Leisure",
    ],
    "04/07/2019": [
      "05:30am - 06:45am Chill",
      "06:45am - 07:15am Shower",
      "07:15am - 09:00am Cook, Eat, Dishes",
      "09:00am - 10:00am Chill",
      "WASTE DAY (basically leisure all day except essentials) Ended at 8pm"
    ],
    "04/08/2019": [
      "04:05am - 04:30am Chill",
      "04:30am - 06:00am Cook, Eat, Dishes",
      "06:00am - 06:30am Transit",
      "06:30am - 07:50am Gym",
      "07:50am - 08:25am Shower",
      "08:25am - 08:45am Transit",
      "08:45am - 05:00pm Work",
      "05:00pm - 05:55pm Transit, Groceries",
      "05:55pm - 06:20pm Chill",
      "06:20pm - 06:30pm Dishes",
      "06:30pm - 07:00pm Shower",
      "07:00pm - 07:40pm Reading",
      "07:40pm - 08:15pm Chill",
    ],
    "04/09/2019": [
      "06:55am - 07:05am Cook Rice",
      "07:05am - 07:30am Shower",
      "07:30am - 08:40am Cook, Eat, Dishes",
      "08:40am - 09:00am Transit",
      "09:00am - 05:00pm Work",
      "05:00pm - 05:40pm Chill",
      "05:40pm - 07:10pm Hangout with Steven",
      "07:10pm - 07:40pm Transit",
      "07:40pm - 08:10pm Chill",
      "08:10pm - 08:15pm Dishes",
      "08:15pm - 08:45pm Shower",
      "08:45pm - 08:50pm Brush Teeth",
    ],
    "04/10/2019": [
      "05:15am - 06:00am Eat, Dishes",
      "06:00am - 06:20am Transit",
      "06:20am - 08:00am Gym",
      "08:00am - 08:30am Shower",
      "08:30am - 08:50am Transit",
      "08:50am - 05:00pm Work",
      "05:00pm - 05:35pm Transit",
      "05:35pm - 05:45pm Chill",
      "05:45pm - 05:50pm Dishes",
      "05:50pm - 06:00pm Chill",
      "06:00pm - 06:20pm Shower",
      "06:20pm - 06:30pm Work Report Submission",
      "06:30pm - 07:30pm Taxes",
      "07:30pm - 08:10pm Tetris",
      "08:10pm - 08:25pm Teeth Stuff",
      "08:25pm - 09:00pm Chill",
    ],
    "04/11/2019": [
      "04:15am - 06:00am Cooking, Eat, Dishes",
      "06:00am - 06:30am Transit",
      "06:30am - 08:00am Gym",
      "08:00am - 08:30am Shower",
      "08:30am - 08:50am Transit",
      "08:50am - 05:00pm Work",
      "05:00pm - 06:05pm Transit, Shopping",
      "06:05pm - 07:00pm Chill",
      "07:00pm - 07:30pm Organization",
      "07:30pm - 08:00pm Shower",
      "08:00pm - 08:30pm Chill",
    ],
    "04/12/2019": [
      "05:30am - 06:00am Eat, Dishes",
      "06:00am - 06:30am Transit",
      "06:20am - 07:50am Gym",
      "07:50am - 08:30am Shower",
      "08:30am - 08:50am Transit",
      "08:50am - 05:00pm Work",
      "05:00pm - 05:55pm Transit, Groceries",
      "05:55pm - 06:45pm Chill",
      "06:45pm - 07:10pm Shower",
      "07:10pm - 07:40pm Tetris",
      "07:40pm - 08:15pm Mentor Piece",
    ],
    "04/13/2019": [
      "05:45am-05:55am Rice",
      "05:55am-06:15am Shower",
      "06:15am-07:30am Cook, Dishes, Eat",
      "WASTE DAY TIL 8",
    ],
    "04/14/2019": [
        "07:00am - 09:30am Tetris",
        "09:30am - 10:05am Eat",
        "10:05am - 11:00am Youtube",
        "11:00am - 12:25pm Games",
        "12:25pm - 01:30pm Youtube",
        "01:30pm - 02:00pm Dishes",
        "02:00pm - 02:25pm Shower",
        "02:25pm - 02:35pm Dishes",
        "02:35pm - 03:00pm Cleaning",
        "03:00pm - 04:00pm Call Family",
        "04:00pm - 05:30pm Youtube, Games",
        "05:30pm - 06:30pm Groceries",
        "06:30pm - 08:30pm Youtube, Tetris",
        "08:30pm - 10:00pm Mentor Piece",
    ],
    "04/15/2019": [
      "06:35am - 06:55am Check Phone",
      "06:55am - 07:00am Rice",
      "07:00am - 07:20am Shower",
      "07:20am - 08:35am Cook, Eat, Dishes",
      "08:35am - 08:45am Pack",
      "08:45am - 09:05am Transit",
      "09:05am - 05:00pm Work",
      "05:00pm - 06:10pm Transit, Pick Up Bag",
      "06:10pm - 07:50pm Gym",
      "07:50pm - 08:25pm Shower",
      "08:25pm - 08:40pm Transit",
      "08:40pm - 08:45pm Dishes",
    ],
    "04/16/2019": [
      "06:45am - 07:15am Shower",
      "07:15am - 07:25am Dishes",
      "07:25am - 07:55am Eat, Dishes",
      "07:55am - 08:15am Youtube",
      "08:15am - 08:20am Dishes",
      "08:20am - 08:25am Pack",
      "08:25am - 09:05am Transit",
      "09:05am - 05:00pm Work",
      "05:00pm - 05:55pm Transit",
      "05:55pm - 06:10pm Eat",
      "06:10pm - 06:40pm Shower",
      "06:40pm - 07:00pm Chill",
      "07:00pm - 08:00pm Pictures, Resume",
    ],
    "04/17/2019": [
      "03:55am - 04:00am Phone",
      "04:00am - 05:40am Cook, Eat, Dishes",
      "05:40am - 05:50am Chores",
      "05:50am - 06:00am Teeth stuff",
      "06:00am - 06:30am Transit",
      "06:30am - 08:00am Gym",
      "08:00am - 08:35am Shower",
      "08:35am - 09:00am Transit",
      "09:00am - 05:00pm Work",
      "05:00pm - 05:45pm Transit",
      "05:45pm - 08:15pm Leisure",
    ],
    "04/18/2019": [
      "05:00am - 05:50am Eat",
      "05:50am - 06:00am Teeth stuff",
      "06:00am - 06:30am Reading",
      "06:30am - 07:00am Transit",
      "07:00am - 07:55am Gym",
      "07:55am - 08:35am Shower",
      "08:35am - 09:00am Transit",
      "09:00am - 05:00pm Work",
      "05:00pm - 05:55pm Transit, Groceries",
      "05:55pm - 06:55pm Shower, Hair",
      "06:55pm - 08:00pm Chill",
    ],
    "04/19/2019": [
      "06:25am - 08:05am Chill",
      "08:05am - 08:30am Meditation",
      "08:30am - 09:30am Cook",
      "09:30am - 10:10am Shower",
      "10:10am - 10:50am Eat, Dishes",
      "WASTE DAY TIL 10pm"
    ],
    "04/20/2019": [
      "08:30am - 10:00am Phone",
      "10:00am - 10:30am Eat, Dishes",
      "10:30am - 11:00am Transit",
      "11:00am - 01:00pm Gym",
      "01:00pm - 01:30pm Transit",
      "01:30pm - 03:25pm Chill",
      "03:25pm - 03:35pm Meditation",
      "03:35pm - 03:55pm Writing",
      "03:55pm - 04:25pm Video Editing",
      "04:25pm - 08:00pm Chill",
      "08:00pm - 08:35pm Shower",
      "08:35pm - 09:30pm Light Novel Reading",
    ],
    "04/21/2019": [
      "05:00am - 05:30am Phone",
      "05:30am - 05:45am Meditation",
      "05:45am - 06:10am Shower",
      "06:10am - 07:55am Cook, Eat, Dishes",
      "07:55am - 10:35am Chill",
      "10:35am - 10:40am Protein Shake",
      "10:40am - 12:45pm Chill",
      "12:45pm - 01:15pm Notes",
      "01:15pm - 01:45pm Eat",
      "01:45pm - 02:30pm Chill",
      "02:30pm - 04:05pm Thinking, Edit Schedule, Book Notes",
      "WASTE DAY TIL 8"
    ],
    "04/22/2019": [
      "04:30am - 04:50am Chill",
      "04:50am - 05:40am Eat, Dishes",
      "05:40am - 06:00am Chill",
      "06:00am - 06:25am Transit",
      "06:25am - 08:20am Gym",
      "08:20am - 08:50am Shower",
      "08:50am - 09:10am Transit",
      "09:10am - 05:10pm Work",
      "05:10pm - 08:15pm Hangout with Steven",
      "08:15pm - 09:00pm Transit",
      "09:00pm - 09:40pm Chill",
    ],
    "04/23/2019": [
      "06:30am - 06:35am Cooking Rice",
      "06:35am - 07:10am Shower",
      "07:10am - 08:15am Cook, Eat, Dishes",
      "08:15am - 08:40am Transit",
      "08:40am - 04:30pm Work",
      "04:30pm - 05:20pm Transit",
      "05:20pm - 07:30pm Movie with Selena",
      "07:30pm - 07:50pm Transit",
      "07:50pm - 09:15pm Chill",
      "09:15pm - 09:50pm Shower",
    ],
    "04/24/2019": [
      "05:45am - 06:50am Chill",
      "06:50am - 07:20am Shower",
      "07:20am - 08:40am Cook, Eat, Dishes",
      "08:40am - 09:05am Transit",
      "09:05am - 05:10pm Work",
      "05:10pm - 05:30pm Transit",
      "05:30pm - 07:00pm Gym",
      "07:00pm - 07:30pm Transit",
      "07:30pm - 08:00pm Shower",
      "08:00pm - 09:00pm Chores",
    ],
    "04/25/2019": [
      "06:30am - 06:45am Phone",
      "06:45am - 07:15am Shower",
      "07:15am - 08:40am Cook, Eat, Dishes",
      "08:40am - 09:05am Transit",
      "09:05am - 05:00pm Work",
      "05:00pm - 05:55pm Transit, Groceries",
      "05:55pm - 07:00pm Chill",
      "07:00pm - 07:45pm Chores",
      "07:45pm - 08:15pm Chill",
      "08:15pm - 08:50pm Shower",
    ],
    "04/26/2019": [
      "06:20am - 06:30am Meditation",
      "06:30am - 07:15am Shower",
      "07:15am - 07:45am Eat",
      "07:45am - 08:30am Chill",
      "08:30am - 09:30am Transit, CFM Visit",
      "09:30am - 05:15pm Work",
      "05:15pm - 06:30pm Meeting with Rachel and Steven",
      "06:30pm - 07:00pm Transit",
      "07:00pm - 09:00pm Kinkaku w/ Blake, Allen, and Bri",
      "09:00pm - 11:00pm Chill",
    ],
    "04/27/2019": [
      "05:55am - 06:15am Phone",
      "06:15am - 06:25am Journaling",
      "06:25am - 06:45am Chores",
      "06:45am - 07:15am Shower",
      "07:15am - 07:35am Chill",
      "07:35am - 09:00am Cook, Eat, Dishes",
      "09:00am - 09:10am Teeth Stuff",
      "09:10am - 09:20am Nails",
      "09:20am - 10:00am Chill",
      "10:00am - 10:40am Read",
      "10:40am - 11:15am Tetris",
      "11:15am - 11:45am Chill",
      "11:45am - 01:50pm Note Taking",
      "01:50pm - 02:20pm Eat",
      "02:20pm - 05:55pm Chill",
      "05:55pm - 06:10pm Laundry",
      "06:10pm - 06:50pm Shower",
      "06:50pm - 07:10pm Chill",
      "07:10pm - 07:45pm Plan",
      "07:45pm - 08:00pm Meditate",
    ],
    "04/28/2019": [
      "06:30am - 07:25am Phone, Chill",
      "07:25am - 07:50am Shower",
      "07:50am - 09:00am Cook, Eat, Dishes",
      "09:00am - 09:15am Meditation",
      "09:15am - 09:55am Book Notes",
      "09:55am - 11:10am Reading, Mission Statement, Etc",
      "11:10am - 11:25am Maplestory",
      "11:25am - 12:00pm Lunch",
      "WASTE DAY TIL 8:20"
    ],
    "04/29/2019": [
      "04:10am - 05:55am Cook, Eat, Dishes",
      "05:55am - 06:20am Transit",
      "06:20am - 08:10am Gym",
      "08:10am - 08:40am Shower",
      "08:40am - 09:00am Transit",
      "09:00am - 05:00pm Work",
      "05:00pm - 06:00pm Groceries, Transit",
      "06:00pm - 06:30pm Call Home",
      "06:30pm - 07:00pm Shower",
      "07:00pm - 08:00pm Chill",
    ],
    "04/30/2019": [
      "04:20am - 05:30am Cook, Eat, Dishes",
      "05:30am - 06:30am Chill",
      "06:30am - 07:00am Shower",
      "07:00am - 08:45am Chill",
      "08:45am - 09:00am Waiting at Bus Stop",
      "09:00am - 09:20am Transit",
      "09:20am - 05:15pm Work",
      "05:15pm - 05:40pm Eat",
      "05:40pm - 06:00pm Transit",
      "06:00pm - 07:40pm Gym",
      "07:40pm - 08:00pm Shower",
      "08:00pm - 08:20pm Dress, Walk to Bus stop",
      "08:20pm - 08:40pm Transit",
      "08:40pm - 10:45pm Cook, Eat, Dishes",
      "10:45pm - 11:15pm Schedule Planing",
      "11:15pm - 11:30pm Teeth Stuff",
    ],
    "05/01/2019": [
      "06:00am - 07:00am Chill",
      "07:00am - 07:45am Eat, Dishes",
      "07:45am - 08:15am Shower",
      "08:15am - 08:30am Meditation",
      "08:30am - 09:05am Transit",
      "09:05am - 05:00pm Work",
      "05:00pm - 05:25pm Eat",
      "05:25pm - 06:15pm Groceries, Transit",
      "06:15pm - 07:00pm Couponing, GRT Stuff",
      "07:00pm - 07:30pm Chill",
      "07:30pm - 07:45pm Meditate",
      "07:45pm - 08:30pm Chill",
      "08:30pm - 09:30pm Cook",
      "09:30pm - 10:00pm Shower",
      "10:00pm - 10:30pm Eat",
      "10:30pm - 11:00pm Chill",
    ],
    "05/02/2019": [
      "06:00am - 06:15am Phone",
      "06:15am - 06:30am Meditate",
      "06:30am - 07:30am Chill",
      "07:30am - 08:00am Eat",
      "08:00am - 08:30am Shower",
      "08:30am - 09:00am Transit",
      "09:00am - 05:00pm Work",
      "05:00pm - 05:25pm Eat",
      "05:25pm - 07:00pm Transit, Get Bus Pass",
      "07:00pm - 08:15pm Gym",
      "08:15pm - 08:50pm Shower, Dress",
      "08:50pm - 09:10pm Transit",
      "09:10pm - 10:30pm Cook, Eat, Dishes",
      "10:30pm - 11:00pm Chill",
    ],
    "05/03/2019": [
      "07:30am - 08:10am Phone",
      "08:10am - 08:40am Eat",
      "08:40am - 09:10am Transit",
      "09:10am - 05:00pm Work",
      "05:00pm - 05:30pm Eat",
      "05:30pm - 06:20pm Groceries, Transit",
      "06:20pm - 06:45pm Chill",
      "06:45pm - 07:20pm Shower",
      "07:20pm - 07:45pm Chill",
      "07:45pm - 09:30pm Cook, Eat, Dishes",
      "09:30pm - 10:00pm Chill",
    ],
    "05/04/2019": [
      "07:45am - 08:35am Chill",
      "08:35am - 09:30am Eat",
      "09:30am - 02:35pm Chill",
      "02:35pm - 03:00pm Shower",
      "03:00pm - 03:30pm Eat",
      "03:30pm - 05:00pm Read",
      "05:00pm - 06:40pm Nap",
      "06:40pm - 09:30pm Chill",
      "09:30pm - 11:00pm Cook, Eat, Dishes",
    ],
    "05/05/2019": [
      "07:00am - 07:30am Shower",
      "07:30am - 08:05am Chill",
      "08:05am - 08:45am Eat",
      "08:45am - 09:00am Chill",
      "09:00am - 10:00am Working on Roles, Mission Statement",
      "WASTE DAY TIL 10"
    ],
    // BELOW HAVENT BEEN RECORDED
    "05/06/2019": [
      "06:15am - 06:30am Chill",
      "06:30am - 06:45am Meditation",
      "06:45am - 07:30am Coding",
      "07:30am - 08:00am Eat",
      "08:00am - 08:20am Shower",
      "08:20am - 08:40am Dishes",
      "08:40am - 09:00am Transit",
      "09:00am - 05:00pm Work",
      "05:00pm - 05:20pm Transit",
      "05:20pm - 06:40pm Gym",
      "06:40pm - 07:20pm Shower, Dress",
      "07:20pm - 07:40pm Read",
      "07:40pm - 08:35pm Transit, Groceries",
      "08:35pm - 10:05pm Cook, Eat, Dishes",
    ],
    "05/07/2019": [
      "07:05am - 07:30am Phone",
      "07:30am - 08:00am Eat",
      "08:00am - 08:30am Shower",
      "08:30am - 08:35am Chores",
      "08:35am - 08:55am Wait for Bus",
      "08:85am - 09:15am Transit",
      "09:15am - 05:15pm Work",
      "05:15pm - 05:50pm Transit",
      "05:50pm - 06:00pm Chill",
      "06:00pm - 06:15pm Meditation",
      "06:15pm - 07:15pm Chill",
      "07:15pm - 08:30pm Coding",
      "08:30pm - 10:15pm Cook, Eat, Dishes",
      "10:15pm - 10:35pm Shower",
      "10:35pm - 10:45pm Chores",
      "10:45pm - 10:50pm Teeth Stuff",
    ],
    "05/08/2019": [
      "06:00am - 06:25am Phone",
      "06:25am - 06:35am Meditation",
      "06:35am - 07:30am Code",
      "07:30am - 07:55am Eat",
      "07:55am - 08:20am Shower",
      "08:20am - 08:40am Protein Shake",
      "08:40am - 09:00am Transit",
      "09:00am - 05:00pm Work",
      "05:00pm - 05:20pm Transit",
      "05:20pm - 06:30pm Gym",
      "06:30pm - 07:30pm Transit, Groceries",
      "07:30pm - 08:30pm Chill",
      "08:30pm - 10:15pm Cook, Eat, Dishes",
      "10:15pm - 10:45pm Shower",
    ],
    "05/09/2019": [
      "07:05am - 07:50am Code",
      "07:50am - 08:20am Shower",
      "08:20am - 08:30am Chores",
      "08:30am - 09:15am Transit",
      "09:15am - 05:15pm Work",
      "05:15pm - 05:50pm Transit",
      "05:50pm - 08:15pm Video Chat",
      "08:15pm - 08:45pm Shower",
      "08:45pm - 10:25pm Cook, Eat, Dishes",
    ],
    "05/10/2019": [
      "06:30am - 07:15am Coding",
      "07:15am - 07:45am Eat",
      "07:45am - 08:15am Shower",
      "08:15am - 08:30am Chill",
      "08:30am - 09:00am Transit",
      "09:00am - 05:00pm Work",
      "05:00pm - 06:10pm Chill",
      "06:10pm - 07:30pm Bus to Richmond Hill",
      "07:30pm - 11:00pm Eat, Chill with Family",
    ],
    "05/11/2019": [
      "Note: Very rough estimates",
      "07:00am - 07:45am Coding",
      "07:45am - 09:20am Eat, Chill with Family",
      "09:20am - 11:00am Shopping at Sports Check",
      "11:00am - 02:00pm Eat, Chill with Family",
      "02:00pm - 05:30pm Rock Climbing",
      "05:30pm - 11:00pm Eat, Chill with Family",
    ],
    "05/12/2019": [
      "Note: Very rough estimates",
      "07:30am - 09:00am Chill with Family",
      "09:00am - 10:40am Brunch",
      "10:40am - 12:40pm Drop Grandparents off, Go to Square One, Wait",
      "12:40pm - 02:00pm Transit to Waterloo",
      "02:00pm - 02:30pm Going Home",
      "02:30pm - 04:35pm Unwinding, Unpacking, Chilling",
      "04:35pm - 05:30pm Coding",
      "05:30pm - 06:30pm Groceries",
      "06:30pm - 08:30pm Eat, Cooking, Dishes",
      "08:30pm - 10:00pm Chill",
      "10:00pm - 10:30pm Shower",
      "10:30pm - 12:00pm Playing with Google Home",
    ],
    "05/13/2019": [
      "06:40am - 07:20am Chill",
      "07:20am - 07:55am Code",
      "07:55am - 08:20am Shower",
      "08:20am - 08:50am Pack, Organize",
      "08:50am - 09:15am Bike",
      "09:15am - 05:15pm Work",
      "05:15pm - 05:45pm Bike",
      "05:45pm - 06:00pm Chill",
      "06:00pm - 06:20pm Nap",
      "06:20pm - 07:05pm Eat, Dishes",
      "07:05pm - 07:15pm Bike",
      "07:15pm - 08:45pm Gym",
      "08:45pm - 09:15pm Shower",
      "09:15pm - 09:30pm Bike",
      "09:30pm - 11:00pm Cook, Eat",
    ],
    "05/14/2019": [
      "06:45am - 07:00am Morning Chores",
      "07:00am - 08:00am Coding",
      "08:00am - 08:30am Shower",
      "08:30am - 09:00am Transit",
      "09:00am - 05:00pm Work",
      "05:00pm - 07:00pm CFM Social",
      "07:00pm - 07:45pm Chill w/ V1 Friends",
      "07:45pm - 09:50pm Chill w/ Cindy",
      "09:50pm - 10:20pm Bike, Groceries",
      "10:20pm - 10:50pm Shower",
      "10:50pm - 11:30pm Chill",
      "11:30pm - 01:00am Cook, Eat, Dishes",
    ],
    // Below haven't been recorded
    "05/15/2019": [
      "07:30am - 08:00am Chill",
      "08:00am - 08:20am Shower",
      "08:20am - 08:50am Eat",
      "08:50am - 09:15am Bike",
      "09:15am - 05:00pm Work",
      "05:00pm - 05:25pm Bike",
      "05:25pm - 05:40pm Chill",
      "05:40pm - 06:40pm Nap",
      "06:40pm - 07:30pm Chill",
      "07:30pm - 08:50pm Code",
      "08:50pm - 09:20pm Shower",
      "09:20pm - 10:50pm Cook, Eat, Dishes",
      "10:50pm - 11:00pm Teeth Stuff"
    ],
    "05/16/2019": [
      "07:20am - 07:30am Chill",
      "07:30am - 08:10am Coding",
      "08:10am - 08:20am Shower",
      "08:20am - 08:35am Pack",
      "08:35am - 09:00am Bike",
      "09:00am - 05:00pm Work",
      "05:00pm - 05:40pm Bike, Groceries",
      "05:40pm - 05:55pm Pack, Prep, Organize",
      "05:55pm - 06:10pm Bike",
      "06:10pm - 07:15pm Gym",
      "07:15pm - 07:50pm Shower, Dress",
      "07:50pm - 08:05pm Bike",
      "08:05pm - 08:40pm Cook, Dishes, Eat",
      "08:40pm - 10:00pm Chill"
    ],
    "05/17/2019": [
      "06:40am - 07:00am Chill",
      "07:00am - 07:15am Prep",
      "07:15am - 08:00am Coding",
      "08:00am - 08:30am Eat",
      "08:00am - 08:45am Shower",
      "08:45am - 09:05am Bike",
      "09:05am - 04:40pm Work",
      "04:40pm - 05:10pm Bike",
      "05:10pm - 05:40pm Pack, Prep, Organize",
      "05:40pm - 06:00pm Bike",
      "06:00pm - 07:30pm Gym",
      "07:30pm - 08:00pm Shower, Dress",
      "08:00pm - 08:15pm Bike",
      "08:15pm - 09:30pm Cook, Dishes, Eat",
      "09:30pm - 11:00pm Chill"
    ],
    "05/18/2019": [
      "07:00am - 07:30am Eat",
      "07:30am - 10:10am Chill",
      "10:10am - 10:40am Shower",
      "10:40am - 12:40pm Clean Room, Laundry, Chores, Etc",
      "12:40pm - 01:10pm Eat",
      "01:10pm - 08:30pm Chill",
      "08:30pm - 10:00pm Cook, Eat, Dishes",
      "10:00pm - 11:00pm Chill",
      "11:00pm - 11:30pm Shower"
    ],
    "05/19/2019": [
      "08:00am - 08:30am Eat",
      "08:30am - 01:45pm Chill",
      "01:45pm - 02:15pm Shower",
      "02:15pm - 02:20pm Dishes",
      "02:20pm - 02:55pm Eat, Dishes",
      "02:55pm - 03:15pm Read",
      "03:15pm - 03:30pm Chill",
      "03:30pm - 04:15pm Bike",
      "04:15pm - 05:30pm Coding",
      "05:30pm - 06:10pm Bike, Groceries",
      "06:10pm - 06:30pm Chill",
      "06:30pm - 06:45pm Bike",
      "06:45pm - 08:15pm Gym",
      "08:15pm - 08:30pm Bike",
      "08:30pm - 09:00pm Shower",
      "09:00pm - 10:30pm Cook, Eat, Dishes",
      "10:30pm - 01:30am Chill"
    ],
    "05/20/2019": [
      "07:00am - 08:30am Chill",
      "08:30am - 09:00am Eat",
      "09:00am - 01:00pm Chill",
      "01:00pm - 01:30pm Bike",
      "01:30pm - 04:30pm Lunch w/ Selena",
      "04:30pm - 05:00pm Bike",
      "05:00pm - 07:00pm Nap",
      "07:00pm - 07:30pm Shower",
      "07:30pm - 08:00pm Eat",
      "08:00pm - 11:00pm Chill",
      "11:00pm - 01:00am Cindy's Birthday Surprise"
    ],
    "05/21/2019": [
      "07:00am - 07:30am Phone",
      "07:30am - 08:00am Shower",
      "08:00am - 08:30am Eat",
      "08:30am - 08:45am Pack",
      "08:45am - 09:05am Bike",
      "09:05am - 05:00pm Work",
      "05:00pm - 05:30pm Bike, Pick up Package",
      "05:30pm - 06:10pm Code",
      "06:10pm - 06:25pm Bike",
      "06:25pm - 07:30pm Gym",
      "07:30pm - 08:00pm Shower, Dress",
      "08:00pm - 08:15pm Bike",
      "08:15pm - 08:45pm Chill",
      "08:45pm - 09:30pm Cook, Dishes",
      "09:30pm - 10:10pm Video Call w/ Rachel"
    ],
    "05/22/2019": [
      "06:00am - 06:35am Chill",
      "06:35am - 07:10am Coding",
      "07:10am - 07:30am Tetris",
      "07:30am - 08:05am Eat",
      "08:05am - 08:30am Shower",
      "08:30am - 08:40am Pack",
      "08:40am - 08:55am Transit",
      "08:55am - 05:00pm Work",
      "05:00pm - 05:55pm Transit, Groceries",
      "05:55pm - 07:10pm Chill",
      "07:10pm - 07:40pm Mentor Story",
      "07:40pm - 08:30pm Chill",
      "08:30pm - 10:00pm Cook, Eat, Dishes"
    ],
    "05/23/2019": [
      "07:00am - 07:15am Chill",
      "07:15am - 08:10am Code",
      "08:10am - 08:30am Shower",
      "08:30am - 08:40am Pack",
      "08:40am - 09:00am Bike",
      "09:00am - 05:00pm Work",
      "05:00pm - 06:20pm Bike, Getting New Bus Pass",
      "06:20pm - 07:00pm Chill",
      "07:00pm - 07:20pm Shower",
      "07:20pm - 07:45pm Chill",
      "07:45pm - 08:45pm Read",
      "08:45pm - 09:30pm Cook, Eat, Dishes",
      "09:30pm - 10:30pm Chill"
    ],
    "05/24/2019": [
      "07:15am - 07:30am Chill",
      "07:30am - 07:50am Code",
      "07:50am - 08:10am Eat",
      "08:10am - 08:35am Shower",
      "08:35am - 08:45am Pack",
      "08:45am - 09:05am Bike",
      "09:05am - 05:00pm Work",
      "05:00pm - 05:50pm Bike",
      "05:50pm - 06:30pm Chill",
      "06:30pm - 06:45pm Bike",
      "06:45pm - 07:30pm Gym",
      "07:30pm - 08:00pm Shower, Dress",
      "08:00pm - 08:15pm Bike",
      "08:15pm - 08:30pm Chill",
      "08:30pm - 10:00pm Cook, Eat, Dishes",
      "10:00pm - 10:10pm Teeth Stuff"
    ],
    "05/25/2019": [
      "08:15am - 09:00am Chill",
      "09:00am - 09:30am Eat",
      "09:30am - 10:20am Family Visit",
      "10:20am - 10:50am Eat, Dishes",
      "10:50am - 11:05am Chores",
      "11:05am - 11:30am Shower",
      "11:30am - 11:40am Teeth Stuff",
      "11:40am - 11:45am Chores",
      "11:45am - 12:35pm Groceries",
      "12:35pm - 12:50pm Chill",
      "12:50pm - 01:15pm Eat",
      "01:15pm - 01:40pm Chores",
      "01:40pm - 02:30pm Chill",
      "02:30pm - 03:00pm Code",
      "03:00pm - 04:45pm Chill",
      "04:45pm - 05:00pm Code",
      "05:00pm - 05:30pm Eat",
      "05:30pm - 06:00pm Chill",
      "06:00pm - 06:30pm Nature Walk",
      "06:30pm - 07:00pm Code",
      "07:00pm - 07:10pm Cook Rice",
      "07:10pm - 07:40pm Shower",
      "07:40pm - 08:40pm Cook, Eat, Dishes",
      "08:40pm - 09:40pm Chill",
      "09:40pm - 10:00pm Teeth Stuff"
    ],
    "05/26/2019": [
      "07:45am - 08:00am Meditation",
      "08:00am - 08:20am Eat",
      "08:20am - 08:45am Chill",
      "08:45am - 09:10am Shower",
      "09:10am - 09:20am Teeth Stuff",
      "09:20am - 11:00am Code",
      "11:00am - 11:25am Chill",
      "11:25am - 12:10pm Coding",
      "12:10pm - 12:30pm Cooking",
      "12:30pm - 01:00pm Chill",
      "01:00pm - 01:20pm Eat",
      "01:20pm - 02:20pm Coding",
      "02:20pm - 02:30pm Bike",
      "02:30pm - 04:40pm Gym",
      "04:40pm - 05:10pm Shower, Dress",
      "05:10pm - 05:20pm Bike",
      "05:20pm - 06:00pm Eat, Dishes",
      "06:00pm - 06:10pm Chill",
      "06:10pm - 08:05pm Book Notes, Stock History Updates, Etc",
      "08:05pm - 08:15pm Cook Rice",
      "08:15pm - 08:30pm Code",
      "08:30pm - 09:15pm Cook, Eat, Dishes",
      "09:15pm - 09:25pm Teeth Stuff",
      "09:25pm - 09:30pm Dishes",
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
