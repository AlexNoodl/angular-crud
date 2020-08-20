import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import {HttpClientModule} from "@angular/common/http";
import { TableFormComponent } from './table/table-form/table-form.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatesFilterPipe} from "./shared/mates-filter.pipe";
import { TableEditComponent } from './table/table-edit/table-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    TableFormComponent,
    MatesFilterPipe,
    TableEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
