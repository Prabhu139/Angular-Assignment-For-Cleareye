import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.scss']
})
export class EmpListComponent implements OnInit {
  employees: Employee[] = [];
  filteredEmployees: Employee[] = [];
  filters: { id: boolean, designation: boolean, location: boolean } = { id: false, designation: false, location: false };
  displayedColumns: string[] = ['name', 'designation', 'location', 'status', 'actions'];
  selectedTab: number = 0;

  constructor(private empSerRef: EmployeeService, private router: Router) {}

  ngOnInit(): void {
    this.empSerRef.getEmployees().subscribe((res: any) => {
      this.employees = res.employees;
      this.filterEmployeesByStatus();
    });
  }

  filterEmployeesByStatus(): void {
    switch (this.selectedTab) {
      case 0: this.filteredEmployees = this.employees; break; // All Employees
      case 1: this.filteredEmployees = this.employees.filter(e => e.status === 'active'); break; // Active
      case 2: this.filteredEmployees = this.employees.filter(e => e.status === 'inactive'); break; // Inactive
      case 3: this.filteredEmployees = this.employees.filter(e => e.status === 'temporarily suspended'); break; // Temporarily Suspended
      case 4: this.filteredEmployees = this.employees.filter(e => e.status === 'terminated'); break; // Terminated
    }
  }

  onTabChange(index: number): void {
    this.selectedTab = index;
    this.filterEmployeesByStatus();
  }

  filterEmployees(filters: any): void {
    this.filteredEmployees = this.employees.filter((employee: any) => {
      const filterId = filters.id ? filters.id.toString().toLowerCase() : null;
      const filterDesignation = filters.designation ? filters.designation.toString().toLowerCase() : null;
      const filterLocation = filters.location ? filters.location.toString().toLowerCase() : null;

      return (
        (!filterId || employee.id.toString().toLowerCase().includes(filterId)) &&
        (!filterDesignation || employee.designation.toLowerCase().includes(filterDesignation)) &&
        (!filterLocation || employee.location.toLowerCase().includes(filterLocation))
      );
    });
  }

  navigateToAddEmployee(): void {
    this.router.navigate(['add', { from: 'emp_l' }]);
  }

  updateStatus(): void {
    this.employees.forEach((employee: any) => {
      if (employee.status === 'temporarily_suspended') {
        employee.status = 'inactive';
      }
    });
    this.empSerRef.updateEmployeeList(this.employees).subscribe(() => {
      console.log('Status updated successfully!');
    });
  }

  editEmployee(employee: Employee): void {
    // Implement edit functionality here
  }

  deleteEmployee(employee: Employee): void {
    this.employees = this.employees.filter(e => e.id !== employee.id);
    this.empSerRef.updateEmployeeList(this.employees).subscribe(() => {
      console.log('Employee deleted successfully!');
      this.filterEmployeesByStatus();
    });
  }
}
