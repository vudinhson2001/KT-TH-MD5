import {Component, OnInit} from '@angular/core';
import {StudentService} from "../../service/service/student.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.css']
})
export class ListStudentComponent implements OnInit {
  students: any

  constructor(private studentService: StudentService) {
  }

  ngOnInit(): void {
    this.getAll()
  }

  getAll() {
    this.studentService.getAll().subscribe((data => {
      this.students = data
      console.log(data)
    }))
  }

  deleteStudent(id: any) {
    if (confirm('Are you sure you want to delete?')) {
      this.studentService.delete(id).subscribe(() => {
        alert("Ok");
        this.getAll()
      }, e => {
        console.log(e);
      });
    }
  }

}
