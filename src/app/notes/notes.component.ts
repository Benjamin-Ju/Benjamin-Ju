import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  constructor() { }

  selected: string

  header: string

  headers: { [id: string]:  string } = {
    'intro': "test",
    'book': '<h4 class="mb-3 font-weight-light"><span class="inner-icon-block" padding=5px>Book Notes</span><img src="assets\book.png" alt="Picture of a Book" width="20px" height="20px"></h4>'

  }



  ngOnInit() {
    this.selected = 'intro'
  }

  show(input: string) {
    this.selected = input
    this.header = this.headers[this.selected]
  }



}
