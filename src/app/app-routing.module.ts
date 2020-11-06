import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashComponent } from './dash/dash.component';
import { StudentAttendenceComponent } from './Attendence/student-attendence/student-attendence.component';
import { StudentInformationComponent } from './student-information/student-information.component';
import { VoucherComponent } from './voucher/voucher.component';
import { CoursesComponent } from './courses/courses.component';




const routes: Routes = [
  { path: '', component: DashComponent},
  {path: 'Dashboard', component: DashComponent},
  { path: 'Edit Profile', component: StudentAttendenceComponent },
  { path: 'My Member', component: StudentInformationComponent },
  { path: 'My Question', component: VoucherComponent },
  { path: 'Courses', component: CoursesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
