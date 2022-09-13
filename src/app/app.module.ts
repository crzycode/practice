import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http'
import {ReactiveFormsModule} from '@angular/forms';
import {FileUploadModule} from 'primeng/fileupload';
import {MessageService} from 'primeng/api'
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import { FileuploadComponent } from './fileupload/fileupload.component';




@NgModule({
  declarations: [
    AppComponent,
    FileuploadComponent,

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FileUploadModule,
    MessageModule,
    MessagesModule
   
  ],
  providers: 
  [
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
