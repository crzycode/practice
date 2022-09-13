import { HttpClient, HttpEventType, HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, inject, OnInit, Output } from '@angular/core';
import {MessageService} from 'primeng/api'



      
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  
  uploadedFiles: any[] = [];

  constructor(public Message: MessageService) { }
  ngOnInit(): void {
    
  }

  onUpload(event:any) {
    for(let file of event.files) {
        this.uploadedFiles.push(file);
    }

    this.Message.add({severity: 'info', summary: 'File Uploaded', detail: ''});
}

   
}