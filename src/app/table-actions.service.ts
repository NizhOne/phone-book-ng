import { Injectable } from '@angular/core';
import {RowData} from './RowData';
import {LocalStorageService} from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class TableActionsService {
  public tableData: Array<RowData> = [];
  public searchResults: Array<RowData> = [];
  constructor(public apiService: LocalStorageService) {
    apiService.getFromStorage('tableData')
      .then(response => this.tableData = response || []);
  }
  private addItem(data: RowData) {
    this.tableData.push(data);
  }
  public removeItem(id: number) {
    this.tableData = this.tableData.filter(item => item.id !== id);
  }
  public updateTable(data: RowData) {
    this.findItem(this.tableData, data.id) === -1 ?
      this.addItem(data) :
      this.updateItem(data);
    this.apiService.setInStorage('tableData', this.tableData);
  }
  private findItem(arr: Array<RowData>, rowDataId: number): number {
    return arr.findIndex( item => item.id === rowDataId);
  }
  private updateItem(data: RowData) {
    this.tableData = this.tableData.map( item => item.id === data.id ? data : item);
  }
  private searchInRow(row: object, searchString: string) {
    return Boolean(
      (Object.values(row)
        .splice(1, 3)
        .filter(rowItem => rowItem.indexOf(searchString) >= 0)
      ).length);
  }
  public searchItem(searchString: string) {
    if (searchString.length === 0) {
      this.searchResults = [];
    } else {
      this.searchResults = this.tableData
        .filter( itemObj =>
          this.searchInRow(itemObj, searchString));
    }
  }
}
