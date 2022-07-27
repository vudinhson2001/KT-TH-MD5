import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import { ActivatedRoute, Router } from '@angular/router';
import {StudentService} from "../../service/service/student.service";

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {
  studentForm: FormGroup = new FormGroup({
    id: new FormControl(0),
    name: new FormControl(''),
    action: new FormControl(''),
    description: new FormControl(''),
  })
  obj: any;
  // @ts-ignore
  constructor(private studentService: StudentService,
              private router: Router,
              private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe((param) => {
      const id = param.get('id');
      this.findById(id);
    })
  }
  findById(id: any) {
    this.studentService.findById(id).subscribe((data) => {
      console.log(data);
      this.studentForm = new FormGroup({
        id: new FormControl(data.id),
        name: new FormControl(data.name),
        description: new FormControl(data.description),
        action: new FormControl(data.action),
      })
    })
  }
  save() {
    this.obj = {
      name: this.studentForm.value.name,
      description: this.studentForm.value.description,
      action: this.studentForm.value.action,
    }
    console.log(this.obj)
    this.studentService.updateStudent(this.studentForm.value.id, this.obj).subscribe((data) => {
      console.log(data)
      alert("Sửa Thành Công!")
      // @ts-ignore
      $('#exampleModalEdit').modal('hide');
      this.studentForm.reset()
      this.router.navigate([""])
    }, error => {
      alert("Lỗi rồi")
      console.log(error)
    })
  }
}
