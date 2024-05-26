import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-emp-filters',
  templateUrl: './emp-filters.component.html',
  styleUrls: ['./emp-filters.component.scss']
})
export class EmpFiltersComponent {

  @Output() filterChange: EventEmitter<any> = new EventEmitter<any>();
  filtersForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.filtersForm = this.fb.group({
      id: [false],
      designation: [false],
      location: [false],
    });
  }

  applyFilters(): void {
    this.filterChange.emit(this.filtersForm.value);
  }

}
