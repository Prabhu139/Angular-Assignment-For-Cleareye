import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent implements OnInit {
  addEmployeeForm: FormGroup;
  isEditMode: boolean = false;
  currentEmployeeId: number | null = null;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private empSerRef: EmployeeService,
    private route: ActivatedRoute
  ) {
    this.addEmployeeForm = this.fb.group({
      emp_id: ['', Validators.required],
      name: ['', Validators.required],
      designation: ['', Validators.required],
      location: ['', Validators.required],
      status: ['active', Validators.required]
    });
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const empId = params.get('id');
      if (empId) {
        this.isEditMode = true;
        this.currentEmployeeId = +empId;
        this.loadEmployeeDetails(this.currentEmployeeId);
      }
    });
  }

  loadEmployeeDetails(id: number): void {
    this.empSerRef.getEmployeeById(id).subscribe((employee: Employee) => {
      this.addEmployeeForm.patchValue(employee);
    });
  }

  onSubmit(): void {
    if (this.addEmployeeForm.valid) {
      if (this.isEditMode && this.currentEmployeeId !== null) {
        this.updateEmployee(this.addEmployeeForm.value);
      } else {
        this.addEmployee(this.addEmployeeForm.value);
      }
      this.addEmployeeForm.reset();
      this.goBack();
    }
  }

  addEmployee(newEmployee: Employee): void {
    this.empSerRef.getEmployees().subscribe((res: any) => {
      const employees: Employee[] = res.employees;
      employees.push(newEmployee);
      this.empSerRef.updateEmployeeList(employees).subscribe(
        () => {
          console.log('Employee added successfully!');
        },
        error => {
          console.error('Error adding employee:', error);
        }
      );
    });
  }

  updateEmployee(updatedEmployee: Employee): void {
    this.empSerRef.getEmployees().subscribe((res: any) => {
      const employees: Employee[] = res.employees;
      const index = employees.findIndex(emp => emp.id === this.currentEmployeeId);
      if (index !== -1) {
        employees[index] = updatedEmployee;
        this.empSerRef.updateEmployeeList(employees).subscribe(
          () => {
            console.log('Employee updated successfully!');
          },
          error => {
            console.error('Error updating employee:', error);
          }
        );
      }
    });
  }

  goBack(): void {
    this.router.navigate(['employees']);
  }
}
