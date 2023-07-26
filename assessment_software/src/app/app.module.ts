import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TextField } from './TextField-Component/TextField.component';
import { ButtonComponent } from './button-component/button.component';
import { FileUploadComponent } from './file-upload-component/file-upload.component';
import {TextareaComponent} from './textarea-component/textarea.component'

@NgModule({
  declarations: [AppComponent, TextField, ButtonComponent, FileUploadComponent, TextareaComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
