import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-search-contact',
  templateUrl: './search-contact.component.html',
  styleUrls: ['./search-contact.component.css']
})
export class SearchContactComponent implements OnInit {
  @Output() search = new EventEmitter<string>();
  constructor() { }
  handleSearch(event) {
    this.search.emit(event.target.value);
  }

  ngOnInit() {
  }

}
