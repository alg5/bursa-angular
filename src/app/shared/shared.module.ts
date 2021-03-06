import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecuritiesComponent } from '../components/securities/securities.component';
import { LiveSearchComponent } from '../components/live-search/live-search.component';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldControl, MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {  MatDatepickerModule,  } from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import { OnlyHebrewDirective } from '../classes/only-hebrew.directive';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import { MatPaginatorIntl, MatPaginatorModule } from '@angular/material/paginator';
// import { MatMomentDateModule } from "@angular/material-moment-adapter";
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';
import { MenuCornerComponent } from '../components/menu-corner/menu-corner.component';
import { PaperDetailsComponent } from '../components/paper-details/paper-details.component';
import { ListCubePaperDetailsComponent } from '../components/list-cube-paper-details/list-cube-paper-details.component';
@NgModule({
  declarations: [ SecuritiesComponent, LiveSearchComponent, MenuCornerComponent, OnlyHebrewDirective
                 , PaperDetailsComponent, ListCubePaperDetailsComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    FormsModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    BrowserModule,
    ReactiveFormsModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatListModule,
    MatMenuModule,
    MatPaginatorModule,
    NgxPaginationModule,
    // MatPaginatorIntl

  ],
  exports: [
    MatTableModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatListModule,
    MatMenuModule,
    MatPaginatorModule,
    // MatPaginatorIntl,
    FormsModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    BrowserModule,
    ReactiveFormsModule,
    OnlyHebrewDirective,
    NgxPaginationModule
  ]
})
export class SharedModule { }
