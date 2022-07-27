import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListStudentComponent} from "./student/list-student/list-student.component";
import {CreateStudentComponent} from "./student/create-student/create-student.component";
import {DetailStudentComponent} from "./student/detail-student/detail-student.component";
import {EditStudentComponent} from "./student/edit-student/edit-student.component";
import {DeleteStudentComponent} from "./student/delete-student/delete-student.component";

const routes: Routes = [
  {
    path:'',
    component: ListStudentComponent
  },
  {
    path:'create',
    component: CreateStudentComponent
  },
  {
    path: 'detail-student/:id',
    component: DetailStudentComponent
  },
  {
    path: 'edit-student/:id',
    component: EditStudentComponent
  },
  {
    path: 'delete-student/:id',
    component: DeleteStudentComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
