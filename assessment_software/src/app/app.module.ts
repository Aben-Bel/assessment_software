import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// pages
import { PageNotFoundComponent } from './page/404 page/page-not-found/page-not-found.component';
import { AddAssignmentComponent } from './page/add assignment/add-assignment/add-assignment.component';
import { ArchivedComponent } from './page/archived/archived/archived.component';
import { AssignmentDetailComponent } from './page/assignment detail/assignment-detail/assignment-detail.component';
import { ChangePasswordComponent } from './page/change password/change-password/change-password.component';
import { CourseComponent } from './page/course/course/course.component';
import { EditAssignmentComponent } from './page/edit assignment/edit-assignment/edit-assignment.component';
import { HomeComponent } from './page/home/home/home.component';
import { SignInComponent } from './page/sign in/sign-in/sign-in.component';
import { StudentListComponent } from './page/student list/student-list/student-list.component';
import { AssignmentComponent } from './page/assignment/assignment.component';
import { ComponentsComponent } from './page/components/components.component';
import { NavbarComponent } from './navbar/navbar.component';

// components
import { TextField } from './components/TextField-Component/TextField.component';
import { ArchiveCardComponent } from './components/archive-card/archive-card.component';
import { AssignmentCardComponent } from './components/assignment-card/assignment-card.component';
import { ButtonComponent } from './components/button-component/button.component';
import { CourseCardComponent } from './components/course-card/course-card.component';
import { DatepickerComponent } from './components/datepicker/datepicker.component';
import { ConfirmationBoxComponent } from './components/dialogue-box/confirmationBox-component/confirmationBox.component';
import { SuccessBoxComponent } from './components/dialogue-box/successBox-component/successBox.component';
import { WarningBoxComponent } from './components/dialogue-box/warnngBox-component/warningBox.component';
import { FileUploadComponent } from './components/file-upload-component/file-upload.component';
import { HelpComponentComponent } from './components/help-component/help-component.component';
import { PathDisplayComponent } from './components/path-display/path-display.component';
import { ProfileAvatarComponent } from './components/profile-avatar/profile-avatar-component';
import { TableComponent } from './components/table-component/table.component';
import { TextareaComponent } from './components/textarea-component/textarea.component';

@NgModule({
  declarations: [
    AppComponent,
    TextField,
    ButtonComponent,
    FileUploadComponent,
    TextareaComponent,
    PathDisplayComponent,
    TableComponent,
    ConfirmationBoxComponent,
    SuccessBoxComponent,
    WarningBoxComponent,
    CourseCardComponent,
    AssignmentCardComponent,
    DatepickerComponent,
    ProfileAvatarComponent,
    ArchiveCardComponent,
    HelpComponentComponent,
    PageNotFoundComponent,
    AddAssignmentComponent,
    ArchivedComponent,
    AssignmentDetailComponent,
    ChangePasswordComponent,
    CourseComponent,
    EditAssignmentComponent,
    HomeComponent,
    SignInComponent,
    StudentListComponent,
    AssignmentComponent,
    ComponentsComponent,
    NavbarComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
