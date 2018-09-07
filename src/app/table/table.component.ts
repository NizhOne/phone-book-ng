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
  public isDialog = false;
  constructor(public tableAction: TableActionsService) {}

  deleteItem(id) {
    this.tableAction.removeItem(id);
  }
  editItem(rowData: RowData) {
    this.isEditing = rowData;
    this.showDialog();
    this.searchItem('');
  }
  saveItem(data) {
    data.id = this.isEditing ? this.isEditing.id : data.id;
    this.tableAction.updateTable(data);
    this.closeDialog();
  }
  closeDialog() {
    this.isDialog = this.isEditing = false;
  }
  showDialog() {
    this.isDialog = true;
  }
  searchItem(searchString) {
    this.tableAction.searchItem(searchString);
  }

  ngOnInit() {}

}
