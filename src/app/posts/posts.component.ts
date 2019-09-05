import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
posts: any;


  constructor(private service: PostService) {
   }

   ngOnInit() {
   this.service.getPosts()
    .subscribe(
      response => {
        this.posts = response;
        console.log(this.posts);
    }, 
      (error: Response) => {
        if (error.status === 404) {
          alert("This post has already been deleted.")
        } else {
          alert("An unexpected error has occurred");
        } 
    });
   }

   createPost(input: HTMLInputElement) {
     let postData = { title: input.value, id: "" };
     input.value = "";
     this.service.createPost(postData)
     .subscribe(
      response => {
        postData['id'] = response.id;
        this.posts.splice(0, 0, postData)
     }, 
      error => {
        alert("An unexpected error has occurred");
    });
   }

   updatePost(post) {
    this.service.updatePost(post)
     .subscribe(
      response => {
        console.log(response);
     }, 
      error => {
        alert("An unexpected error has occurred");
    })
   }

   deletePost(post) {
    this.service.deletePost(post.id)
     .subscribe(
      response => {
        let index = this.posts.indexOf(post);
        this.posts.splice(index, 1);
     }, 
      error => {
        alert("An unexpected error has occurred");
    })
   }

}
