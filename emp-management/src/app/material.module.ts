import { NgModule } from '@angular/core';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
@NgModule({
  imports: [
    MatTabsModule,
    MatListModule,
    MatButtonModule
    // FormsModule,
    // ReactiveFormsModule,
  ],
  exports: [
    MatTabsModule,
    MatListModule,
    MatButtonModule
    // FormsModule,
    // ReactiveFormsModule,
  ]
})
export class MaterialModule { }
