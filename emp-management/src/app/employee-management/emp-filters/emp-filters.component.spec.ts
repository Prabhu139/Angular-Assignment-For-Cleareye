import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpFiltersComponent } from './emp-filters.component';

describe('EmpFiltersComponent', () => {
  let component: EmpFiltersComponent;
  let fixture: ComponentFixture<EmpFiltersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmpFiltersComponent]
    });
    fixture = TestBed.createComponent(EmpFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
