import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { RowData } from '../RowData';
import {TableActionsService} from '../table-actions.service';

@Component({
  selector: 'app-table-row',
  templateUrl: './table-row.component.html',
  styleUrls: ['./table-row.component.css']
})
export class TableRowComponent implements OnInit {
  @Input() rowData: RowData;
  @Input() isHeader: boolean = false;
  @Output() onDelete = new EventEmitter<number>();
  @Output() onEdit = new EventEmitter<RowData>();

  constructor() {}

  ngOnInit() {}

  deleteItem(id) {
    this.onDelete.emit(id);
  }
  editItem() {
    this.onEdit.emit(this.rowData);
  }

}
