import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpListComponent } from './employee-management/emp-list/emp-list.component';
import { AddEmployeeComponent } from './employee-management/add-employee/add-employee.component';
import { QuestionnaireComponent } from './questionnaire/questionnaire/questionnaire.component';

const routes: Routes = [
  { path: '', redirectTo: '/employees', pathMatch: 'full' },
  { path: 'employees', component: EmpListComponent },
  { path: 'add', component: AddEmployeeComponent },
  { path: 'questionnaire', component: QuestionnaireComponent },

  // { path: 'edit/:id', component: EditDeleteEmployeeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
