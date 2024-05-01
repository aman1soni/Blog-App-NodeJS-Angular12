import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


const api_url = "http://localhost:4000/"

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http : HttpClient) { }
  getAllData(){
    return this.http.get<any>("http://localhost:4000/")
  }

  saveData(data:any){
    const headers = { 'content-type': 'application/json'}  
    return this.http.post<any>(api_url+"articles/",data).subscribe(response=>{
      console.warn("data saved successfully!");
    })
    };

  getBlog(slug:any){
    return this.http.get<any>(api_url+"articles/"+slug)
  }

  deleteBlog(id:any){
    console.log(id);
    return this.http.delete(api_url+"articles/"+id)
  }
  
  editBlog(id:any, data:any){
    return this.http.put(api_url+"articles/"+id,data)
  }
  }
