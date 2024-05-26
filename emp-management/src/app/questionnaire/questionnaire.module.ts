import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    QuestionnaireComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule 
  ]
})
export class QuestionnaireModule { }
