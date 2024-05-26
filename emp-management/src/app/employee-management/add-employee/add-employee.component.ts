import { Component, EventEmitter, Output } from '@angular/core';
import { Employee } from '../employee.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent {

  addEmployeeForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private empSerRef:EmployeeService) {
    this.addEmployeeForm = this.fb.group({
      emp_id: ['', Validators.required],
      name: ['', Validators.required],
      designation: ['', Validators.required],
      location: ['', Validators.required],
      status: ['active', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.addEmployeeForm.valid) {
      this.addEmployee(this.addEmployeeForm.value);
      this.addEmployeeForm.reset();
      this.goBack();
    }
  }

  addEmployee(newEmployee: Employee): void {
    this.empSerRef.getEmployees().subscribe((res: any) => {
      const employees: Employee[] = res.employees;
      employees.push(newEmployee);
      console.log(employees, 'employees...')
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


  goBack(){
    this.router.navigate(['employees'])
  }

}
