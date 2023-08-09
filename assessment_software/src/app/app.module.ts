import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TextField } from './TextField-Component/TextField.component';
import { ButtonComponent } from './button-component/button.component';
import { FileUploadComponent } from './file-upload-component/file-upload.component';
import {TextareaComponent} from './textarea-component/textarea.component'
import { PathDisplayComponent } from './path-display/path-display.component';
import {TableComponent} from './table-component/table.component';
import {ProfileAvatarComponent} from './profile-avatar/profile-avatar-component';

import { ConfirmationBoxComponent } from './dialogue-box/confirmationBox-component/confirmationBox.component';
import { SuccessBoxComponent } from './dialogue-box/successBox-component/successBox.component';
import {WarningBoxComponent} from './dialogue-box/warnngBox-component/warningBox.component';
import { CourseCardComponent } from './course-card/course-card.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { AssignmentCardComponent } from './assignment-card/assignment-card.component';

import { ArchiveCardComponent } from './archive-card/archive-card.component';


import { HelpComponentComponent } from './help-component/help-component.component';

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

@NgModule({
  declarations: [AppComponent, TextField, ButtonComponent, FileUploadComponent, TextareaComponent,
    PathDisplayComponent, TableComponent, ConfirmationBoxComponent, SuccessBoxComponent, WarningBoxComponent, CourseCardComponent,AssignmentCardComponent, DatepickerComponent, ProfileAvatarComponent, ArchiveCardComponent, HelpComponentComponent, PageNotFoundComponent, AddAssignmentComponent, ArchivedComponent, AssignmentDetailComponent, ChangePasswordComponent, CourseComponent, EditAssignmentComponent, HomeComponent, SignInComponent, StudentListComponent, AssignmentComponent, ComponentsComponent, NavbarComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
