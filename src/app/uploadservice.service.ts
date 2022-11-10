import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UploadserviceService {
 baseUrl='http://localhost:7789/file/upload'


  constructor(private http:HttpClient) {

    
   }
}
