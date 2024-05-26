import { Component, OnInit } from '@angular/core';
// import { PdfServiceService } from '../pdf-service.service';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.scss']
})
export class EmpListComponent implements OnInit {
  // employees: any = [];
   employees: Employee[] = [];
  filteredEmployees: any = [];
  filters: { id: boolean, designation: boolean, location: boolean } = { id: false, designation: false, location: false };
  displayedColumns: string[] = ['name', 'designation', 'location', 'status', 'actions'];

  constructor(private empSerRef : EmployeeService, 
    private router: Router,

  ) {}

  ngOnInit(): void {
    this.empSerRef.getEmployees().subscribe((res: any) => {
      // console.log(employees, 'emp..')
      this.employees = res.employees;
      // this.filteredEmployees = [...this.employees];
    });
  }

  filterEmployees(filters: any): void {
    this.filteredEmployees = this.employees.filter((employee : any) => {
      return (
        (!filters.id || employee.id.toString().toLowerCase().includes(filters.id.toString().toLowerCase())) &&
        (!filters.designation || employee.designation.toLowerCase().includes(filters.designation.toLowerCase())) &&
        (!filters.location || employee.location.toLowerCase().includes(filters.location.toLowerCase()))
      );
    });
  }

  navigateToAddEmployee(){
    this.router.navigate(['add', { from: 'emp_l' }])

  }

  // addEmployee(newEmployee: Employee): void {
  //   // Assigning ID is not covered here, assuming it's handled by the backend or some other logic
  //   this.employees.push({ ...newEmployee, id: this.employees.length + 1 });
  //   this.empSerRef.updateEmployeeList(this.employees).subscribe(() => {
  //     console.log('Employee added successfully!');
  //   });
  // }

  updateStatus(): void {
    this.employees.forEach((employee:any) => {
      if (employee.status === 'temporarily_suspended') {
        employee.status = 'inactive';
      }
    });
    this.empSerRef.updateEmployeeList(this.employees).subscribe(() => {
      console.log('Status updated successfully!');
    });
  }

  editEmployee(employee: Employee): void {
    // Write logic to edit employee details
  }

  deleteEmployee(employee: Employee): void {
    // Write logic to delete employee from the list
  }
}
