import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, of, tap } from 'rxjs';
import { Employee } from './employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private employeesUrl = 'assets/employee_list.json';
  private employees: Employee[] = []; // Array to store employees locally

  constructor(private http: HttpClient) {this.loadEmployees(); }
 

  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.employeesUrl);
  }

  updateEmployeeList(employees: Employee[]): Observable<void> {
    return this.http.post<void>(this.employeesUrl, employees);
  }
  private loadEmployees(): void {
    this.http.get<Employee[]>(this.employeesUrl).pipe(
      tap(data => this.employees = data),
      catchError(error => {
        console.error('Error loading employees:', error);
        return of([]); // Return an empty array if loading fails
      })
    ).subscribe();
  }
  
  addEmployee(newEmployee: Employee): void {
    this.employees = this.employees || []; // Ensure employees is initialized as an array
    console.log(this.employees, 'from ser')
    this.employees.push(newEmployee); // Add the new employee to the array
  }
}
