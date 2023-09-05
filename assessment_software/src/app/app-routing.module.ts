import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page/404 page/page-not-found/page-not-found.component';
import { AddAssignmentComponent } from './page/add assignment/add-assignment/add-assignment.component';
import { ArchivedComponent } from './page/archived/archived/archived.component';
import { AssignmentDetailComponent } from './page/assignment detail/assignment-detail/assignment-detail.component';
import { ChangePasswordComponent } from './page/change password/change-password/change-password.component';
import { ComponentsComponent } from './page/components/components.component';
import { CourseComponent } from './page/course/course/course.component';
import { EditAssignmentComponent } from './page/edit assignment/edit-assignment/edit-assignment.component';
import { HomeComponent } from './page/home/home/home.component';
import { SignInComponent } from './page/sign in/sign-in/sign-in.component';
import { StudentListComponent } from './page/student list/student-list/student-list.component';

const routes: Routes = [
  { path: 'component', component: ComponentsComponent,},
  { path: 'archived', component: ArchivedComponent },
  { path: 'signin', component: SignInComponent },
  { path: 'change_password', component: ChangePasswordComponent },
  { path: 'courses', component: HomeComponent },
  { path: 'courses/:course_name', component: CourseComponent },
  {
    path: 'courses/:course_name/edit_assignment',
    component: EditAssignmentComponent,
  },
  {
    path: 'courses/:course_name/student_list',
    component: StudentListComponent,
  },
  {
    path: 'courses/:course_name/add_assignment',
    component: AddAssignmentComponent,
  },
  {
    path: 'courses/:course_name/assignment/:assignmentId',
    component: AssignmentDetailComponent,
  },
  { path: '', redirectTo: '/courses', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
