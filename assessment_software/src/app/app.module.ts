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

import { ConfirmationBoxComponent } from './dialogue-box/confirmationBox-component/confirmationBox.component';
import { SuccessBoxComponent } from './dialogue-box/successBox-component/successBox.component';
import {WarningBoxComponent} from './dialogue-box/warnngBox-component/warningBox.component';
@NgModule({
  declarations: [AppComponent, TextField, ButtonComponent, FileUploadComponent, TextareaComponent, 
    PathDisplayComponent, TableComponent, ConfirmationBoxComponent, SuccessBoxComponent, WarningBoxComponent],

  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
