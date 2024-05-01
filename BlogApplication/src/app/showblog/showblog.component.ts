import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-showblog',
  templateUrl: './showblog.component.html',
  styleUrls: ['./showblog.component.css']
})
export class ShowblogComponent implements OnInit {
  blogData:any = [];

  //this fetches all the particlur blog data for show in show component
  constructor(private service : BlogService, 
              private route:ActivatedRoute,
              private router: Router) {

  this.service.getBlog(this.route.snapshot.params.slug).subscribe(data =>{
      console.log(data);
      this.blogData = data;
    })
   }

  ngOnInit(): void {
  }

  //this deletes data for particular blog id
  onDelete(id:any){
    this.service.deleteBlog(id).subscribe((res)=>{
      console.log("data is deleted!"+ res);
    })
    this.router.navigate([""]);
  }

}
