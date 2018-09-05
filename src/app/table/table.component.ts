import { Component, OnInit } from '@angular/core';
import { RowData } from '../RowData';
import { TableActionsService } from '../table-actions.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

export class TableComponent implements OnInit {
  public isEditing: any = false;
  constructor(public tableAction: TableActionsService) {}

  addItem(data) {
    this.tableAction.addItem(data);
  }

  deleteItem(id) {
    this.tableAction.removeItem(id);
  }

  editItem(rowData: RowData) {
    this.isEditing = rowData;
    this.searchItem('');
  }

  saveItem(data) {
    this.tableAction.saveItem(data, this.isEditing.id);
    this.isEditing = false;
  }

  searchItem(searchString) {
    this.tableAction.searchItem(searchString);
  }

  ngOnInit() {}

}
