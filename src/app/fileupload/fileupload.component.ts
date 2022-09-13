import { Component, OnInit } from '@angular/core';
import { FileUploadService } from '../file-upload.service';

@Component({
  selector: 'app-fileupload',
  templateUrl: './fileupload.component.html',
  styleUrls: ['./fileupload.component.css']
})
export class FileuploadComponent implements OnInit {
loading:boolean = false;
file!:File[];
  constructor(private fileupload: FileUploadService) { }

  ngOnInit(): void {
  }
  onchange(event:any){
  
   
      this.file= event.target.files;
  }
  onupload(){
   for(var i = 0; i < this.file.length; i++){
 this.fileupload.upload(this.file).subscribe((event:any) =>{

      if(typeof(event) === "object"){
        this.loading = false;
      }
    })
   }
   
  }

}
