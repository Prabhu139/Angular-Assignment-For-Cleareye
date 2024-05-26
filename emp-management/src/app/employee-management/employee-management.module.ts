import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmpListComponent } from './emp-list/emp-list.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EmpFiltersComponent } from './emp-filters/emp-filters.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmployeeService } from './employee.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { MaterialModule } from '../material.module';
import { MatTabsModule } from '@angular/material/tabs';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';

import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [
    EmpListComponent,
    EmpFiltersComponent,
    AddEmployeeComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatCardModule,
    MatTabsModule,
    BrowserAnimationsModule,
    // MaterialModule
    
  ],
  providers: [EmployeeService],
})
export class EmployeeManagementModule { }
