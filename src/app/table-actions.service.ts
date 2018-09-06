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
      .then(response => this.tableData = response || [])
  }
  public addItem(data: RowData) {
    this.tableData.push(data);
    this.apiService.setInStorage('tableData', this.tableData);
  }
  public removeItem(id: number) {
    this.tableData = this.tableData.filter(item => item.id !== id);
    this.apiService.setInStorage('tableData', this.tableData);
  }
  public getItems(): Array<RowData> {
    return this.tableData;
  }
  public saveItem(data: RowData, id: number) {
    this.tableData = this.tableData.map( item => {
      if (item.id === id) {
        data.id = id;
        return data;
      } else {
        return item;
      }
    });
    this.apiService.setInStorage('tableData', this.tableData);
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
        .filter( itemObj => this.searchInRow(itemObj, searchString))
    }
  }
}
