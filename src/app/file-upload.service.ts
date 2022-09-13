import { HttpClient,HttpEvent,HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {
  // baseURL = "https://localhost:7296/api/Home/upload"

  // constructor(private http: HttpClient) { }
  // upload(file:any): Observable<any>{
  //   const form = new FormData();
  //   for(var i = 0;i<file.lenght;i++){
  //     form.append("file",file,file.name);
  //   }
  
  //   return this.http.post(this.baseURL,form)
  // }

  private baseUrl = 'https://localhost:7296/api/Home';
  constructor(private http: HttpClient) { }
  upload(file: File): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();
    formData.append('file', file);
    const req = new HttpRequest('POST', `${this.baseUrl}/upload`, formData, {
      reportProgress: true,
      responseType: 'json'
    });
    return this.http.request(req);
  }
  getFiles(): Observable<any> {
    return this.http.get(`${this.baseUrl}/files`);
  }

}
