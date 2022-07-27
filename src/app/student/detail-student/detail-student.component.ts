import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {StudentService} from "../../service/service/student.service";

@Component({
  selector: 'app-detail-student',
  templateUrl: './detail-student.component.html',
  styleUrls: ['./detail-student.component.css']
})
export class DetailStudentComponent implements OnInit {
  obj: any = []
  id: any

  constructor(private activatedRoute:ActivatedRoute,
              private studentService: StudentService) {
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((param) => {
      this.id = param.get('id');
      console.log(param);
      this.studentService.findById(this.id).subscribe((data) => {
        console.log(data);
        this.obj = data;
      });
    });
  }

}
