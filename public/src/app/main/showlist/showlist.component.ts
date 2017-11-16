import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-showlist',
  templateUrl: './showlist.component.html',
  styleUrls: ['./showlist.component.css']
})
export class ShowlistComponent implements OnInit {
  @Input() note;
  constructor() { }

  ngOnInit() {
  }

}
