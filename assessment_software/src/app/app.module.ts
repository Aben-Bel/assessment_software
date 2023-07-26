import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TextField } from './TextField-Component/TextField.component';
import { ButtonComponent } from './button-component/button.component';
import { FileUploadComponent } from './file-upload-component/file-upload.component';
import { PathDisplayComponent } from './path-display/path-display.component';

@NgModule({
  declarations: [AppComponent, TextField, ButtonComponent, FileUploadComponent, PathDisplayComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
