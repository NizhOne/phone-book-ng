import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TableRowComponent } from './table-row/table-row.component';
import { TableComponent } from './table/table.component';
import { AddContactComponent } from './add-contact/add-contact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchContactComponent } from './search-contact/search-contact.component';
import { DialogComponent } from './dialog/dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    TableRowComponent,
    TableComponent,
    AddContactComponent,
    SearchContactComponent,
    DialogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
