import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  allBlogs:any = [];
  //In this constructor, loads all the available blogs data from API
  constructor(private service : BlogService) { 
    this.service.getAllData().subscribe(data =>{
      console.log(data)
      this.allBlogs = data;
    })
  }

  ngOnInit(): void {
  }

}
