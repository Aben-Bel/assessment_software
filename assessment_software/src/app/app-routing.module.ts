import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from './page/404 page/page-not-found/page-not-found.component';
import { AddAssignmentComponent } from './page/add assignment/add-assignment/add-assignment.component';
import { ArchivedComponent } from './page/archived/archived/archived.component';
import { AssignmentComponent } from './page/assignment/assignment.component';
import { AssignmentDetailComponent } from './page/assignment detail/assignment-detail/assignment-detail.component';
import { ChangePasswordComponent } from './page/change password/change-password/change-password.component';
import { CourseComponent } from './page/course/course/course.component';
import { EditAssignmentComponent } from './page/edit assignment/edit-assignment/edit-assignment.component';
import { HomeComponent } from './page/home/home/home.component';
import { SignInComponent } from './page/sign in/sign-in/sign-in.component';
import { StudentListComponent } from './page/student list/student-list/student-list.component';

const routes: Routes = [
 
  { path: 'archived', component: ArchivedComponent },
  { path: 'signin', component: SignInComponent },
  { path: 'change_password', component: ChangePasswordComponent },
  { path: 'courses', component: HomeComponent, 
      children:[
        { path: 'course_name', component: CourseComponent, 
            children:[
            { path: 'edit assignment', component: EditAssignmentComponent  },
            { path: 'add assignment', component: AddAssignmentComponent },
            { path: 'student_list', component: StudentListComponent },
            {path: 'assignment', component: AssignmentComponent,
                children:[{path: 'assignment_name', component: AssignmentDetailComponent}]}
          ]},
  ] },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
