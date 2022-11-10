import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upfile',
  templateUrl: './upfile.component.html',
  styleUrls: ['./upfile.component.css']
})
export class UpfileComponent implements OnInit {

  fileUploadUrl="http://localhost:7789/file/upload";
  constructor(
    private _http:HttpClient
  ) { }

  ngOnInit(): void {
  }
  file:any;
  selectFile(event: any){
    //console.log(event);
    this.file=event.target.files[0]; 
    console.log(this.file);
  }
  uploadFile(){
  let formData=new FormData()
  formData.append("image",this.file);

  this._http.post(this.fileUploadUrl,formData).subscribe(
  (data)=>{
  //success
  console.log(data);
  alert("file uploaded");
  },
  (error)=>{ 
   //error
   console.log(error);
  });
  
  


 
  

  
}
}
