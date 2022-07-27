import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {StudentService} from "../../service/service/student.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent implements OnInit {
  studentForm: FormGroup = new FormGroup({
    name: new FormControl(''),
    description: new FormControl(''),
    action: new FormControl('')
  });
  obj: any;

  constructor(private studentService: StudentService,
              private router: Router) {

  }

  ngOnInit(): void {
  }

  add() {
    this.obj = {
      name: this.studentForm.value.name,
      description: this.studentForm.value.description,
      action: this.studentForm.value.action
    };
    console.log(this.obj);
    this.studentService.createStudent(this.obj).subscribe((data) => {
      console.log(data);
      alert("Thành Công");

      // @ts-ignore
      $('#exampleModal').modal('hide');
      this.studentForm.reset();
      this.router.navigateByUrl('/');
    }, error => {
      alert("lỗi");
      console.log(error)
    });
  }
}
