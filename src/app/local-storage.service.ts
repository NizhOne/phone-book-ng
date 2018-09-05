import { Injectable } from '@angular/core';
import { RowData } from './RowData';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  public setInStorage(key, data): Promise<Array<RowData>> {
    return new Promise<Array<RowData>>(resolve => {
      setTimeout(() => {
        window.localStorage.setItem(key, JSON.stringify(data));
        resolve(data);
      }, 100);
    });
  }
  public getFromStorage(key): Promise<Array<RowData>> {
    return new Promise<Array<RowData>>( resolve => {
      setTimeout(() => {
        resolve(JSON.parse(window.localStorage.getItem(key)));
      }, 100);
    });
  }
}
