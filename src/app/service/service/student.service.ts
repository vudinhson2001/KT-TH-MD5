import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Student} from "../../model/student";

const API = 'http://localhost:3000/'

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<any> {
    return this.httpClient.get(API + 'students')
  }

  createStudent(student: any): Observable<Student> {
    return this.httpClient.post<Student>(API + 'students', student)
  }

  findById(id: any): Observable<Student> {
    return this.httpClient.get<Student>(API + 'students/' + id)
  }
  delete(id: any): Observable<Student> {
    return this.httpClient.delete<Student>(API+'students/' + id);
  }
  updateStudent(id: number, student: Student): Observable<Student> {
    return this.httpClient.put<Student>(API+'students/' + id, student);
  }
}
