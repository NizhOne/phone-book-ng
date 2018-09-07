import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  @Output() close = new EventEmitter<boolean>();
  constructor() { }

  onClose() {
    this.close.emit();
  }
  ngOnInit() {
  }

}
