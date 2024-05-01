import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { BlogService } from '../blog.service';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editblog',
  templateUrl: './editblog.component.html',
  styleUrls: ['./editblog.component.css']
})
export class EditblogComponent implements OnInit {

  //this is custom model for Reactive forms
    editBlog = new FormGroup({
    title : new FormControl(''),
    category : new FormControl(''),
    description : new FormControl(''),
  })

  constructor(private service : BlogService, 
              private route:ActivatedRoute,
              private router: Router) { }
  id=null;
  slug="";
  //In this, particular blog data and auto-fills textfields
  ngOnInit(): void {
      this.service.getBlog(this.route.snapshot.params.slug).subscribe(data =>{
      this.id = data._id;
      this.slug = data.slug;
      this.editBlog = new FormGroup({
      title : new FormControl(data['title']),
      category : new FormControl(data['category']),
      description : new FormControl(data['description']),
       })
    })
  }
  data = []
  //this updates data in API using put request
  onUpdate(){
    console.log("updated data is:-"+this.editBlog.value);
    this.data = this.editBlog.value;
    console.warn(this.id);
    this.service.editBlog(this.id,this.data).subscribe(()=>{
      console.warn("data updated successfully!")
    });
    this.router.navigate(["articles/"+this.slug]);
    this.router.navigate([""]);
  }

}
