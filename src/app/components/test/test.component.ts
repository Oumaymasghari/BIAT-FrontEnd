import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PostModule } from 'src/app/shared/Module/post/post.module';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  post:PostModule;
  ngOnInit(): void {}
  
  posts = [
    {
      user: {
        name: 'John Doe',
        profilePic: 'https://picsum.photos/50'
      },
      date: new Date(),
      content: 'new post',
      liked: false,
      comments: [],
      likes:0
    },
    {
      user: {
        name: 'Jane Smith',
        profilePic: 'https://picsum.photos/50?1'
      },
      date: new Date(),
      content: 'good morning',
      liked: false,
      comments: [],
      likes:0
    }
  ];
  loggedInUser = {
    name: 'John Doe',
    profilePic: 'https://randomuser.me/api/portraits/men/75.jpg'
  };

  newPost: PostModule = {
    id: 0,
    user: {
      name: '',
      profilePic: ''
    },
    content: '',
    likes: 0,
    liked: false,
    comments: [],
    date: new Date()
  };
  newPostContent = '';
  createPost() {
    
    const newPost: PostModule = {
      id: this.posts.length + 1,
      user: this.loggedInUser,
      content: this.newPost.content,
      likes: 0,
      liked: false,
      comments: [],
      date: new Date()
    };
    this.posts.unshift(newPost);
    this.newPost.content = '';
  
  }
  newComment = '';
  onComment(post) {
    if (this.newComment) {
      const comment = {
        user: {
          name: 'Jane Smith',
          profilePic: 'https://picsum.photos/50?2'
        },
        date: new Date(),
        content: this.newComment
      };
      post.comments.push(comment);
      this.newComment = '';
    }
  }

  like(post: PostModule) {
    if (!post.liked) {
      post.liked = true;
      post.likes++;
    }
    console.log(post);
  }
  
    toggleComments(post) {
      post.showComments = !post.showComments;
    }
    }
