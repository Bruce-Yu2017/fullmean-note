import { Component, OnInit } from '@angular/core';
import { NoteService } from '../note.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  note = "";
  notes = []; 
  constructor(private _noteService: NoteService) { }

  ngOnInit() {
    this._noteService.retrieveNote((res) => {
      this.notes = res;
    })
  }
  
  onSubmit() {
    this._noteService.createNote(this.note, (res) => {
      this.notes = res;
      this.note = "";
    })
  }
  

}
