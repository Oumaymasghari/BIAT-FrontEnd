import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: PostModule
})
export class PostModule { 
  id: number;
  user:any;
  content: string;
  likes: number= 0;
  liked: boolean;
  comments:any;
  date:any;
  constructor(id: number,  content: string,likes: number,liked: boolean) {
    this.id = id;

    this.content = content;
    this.likes = 0;
    this.liked = false; 
  }
}




