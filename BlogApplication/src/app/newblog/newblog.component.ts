import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router,ROUTES,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-newblog',
  templateUrl: './newblog.component.html',
  styleUrls: ['./newblog.component.css']
})
export class NewblogComponent implements OnInit {

  //custom model for data from reactive forms
  newBlog = new FormGroup({
    title : new FormControl(''),
    category : new FormControl(''),
    description : new FormControl(''),
  })

  constructor(private service : BlogService,
              private http:HttpClient,
              private router: Router) { }

  ngOnInit(): any {
    
  }
  //this function saves data to backend database using POST api
  onSubmit(){
    this.service.saveData(this.newBlog.value)
    this.router.navigate([""]);
    }

}
