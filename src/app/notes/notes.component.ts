import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  constructor() { }

  selected: string

  ngOnInit() {
    this.selected = 'intro'
  }

  show(input: string) {
    this.selected = input
  }



}
