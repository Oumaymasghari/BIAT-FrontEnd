import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit , Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { AuthResponseModule } from 'src/app/shared/Module/auth-response/auth-response.module';
import { CovoiturageModule } from 'src/app/shared/Module/covoiturage/covoiturage.module';
import { PostCommentModule } from 'src/app/shared/Module/post-comment/post-comment.module';
import { ReactionModule } from 'src/app/shared/Module/reaction/reaction.module';
import { CovoiturageService } from 'src/app/shared/Services/covoiturage/covoiturage.service';
import { PostCommentService } from 'src/app/shared/Services/postComment/post-comment.service';
import { StorageService } from 'src/app/shared/Services/storage/storage.service';
import { UserService } from 'src/app/shared/Services/user/user.service';

import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  
  @Input() covoiturage :CovoiturageModule;
  currentUser: any;
  listPostsCov:any;
  selectedEmoji: string;
  selectedCount: number;
  listComments:any;
  covoiturageForm: FormGroup;
  commentText: string[] = [];
  newComment: PostCommentModule = new PostCommentModule();
  comment: PostCommentModule;
 
  constructor(private covoiturageService: CovoiturageService, private storageService: StorageService,
              private userservice:UserService,private http: HttpClient, private postCommentService:PostCommentService,
              private route: ActivatedRoute,private snackBar: MatSnackBar) { }
  ngOnInit(): void {
    this.currentUser = this.storageService.getUser();
  this.getAllcov();
  
  this.comment={
    id:null,
    comment_text:null,
    comment_author: this.storageService.getUser().username ,
    comment_date: new Date(),
    covoiturageId:null,
  }

  this.covoiturage={
      id:null,
      user:{
      username:null
      },     
      heureDepart :null,
      depart :null,
      arrivee :null,
      datedepart :null,
      nbPersonne :null,
      prix :null,
      contactNumber :null,
      postComments: null,
      // Reaction properties
      likeCount:0,
      loveCount: null,
      thumbsUpCount: null,
      thumbsDownCount: null,
      celebrationCount: null,
      datePost: new Date()
  
  };
  
 /////comment
 


  }

  

// REACTION 
emojiList: string[] = ['😀', '😍', '👍', '👎', '🎉'];

reactions = ['😀', '😍', '👍', '👎', '🎉'];
  currentEmoji: string;
  showReactions = false;

  onReactionClick(reaction: string) {
    this.currentEmoji = reaction;
    this.showReactions = false;
  }

  toggleReactions() {
    this.showReactions = !this.showReactions;
  }
///second attemt mtaa reaction 
addReaction(id:any,reaction: any): void  {
 // console.log(JSON.stringify(this.covoiturage.id));
  this.covoiturageService.addReaction(id, reaction)
    .subscribe(
      response => {
        // Update the post with the new reaction count
        this.covoiturage = response;
      },
      error => console.error(error)
    );
    const currentUser = this.userservice.getCurrentUser();
    this.covoiturageForm.value.user = currentUser.id;
  
}



///////////////covoiturage 

isAuthenticated(): boolean {
  return this.userservice.isAuthenticated();
}
// addcov(covoiturage:any): void {
//   console.log(JSON.stringify(this.covoiturage.id));
//   console.log("user " + JSON.stringify(this.storageService.getUser()));
//   this.covoiturageService.addCovoiturage(covoiturage).subscribe(
//     () => {
//       this.listPostsCov.unshift(covoiturage);
//       //this.getAllcov();
      
//     }
//   );
//   const currentUser = this.userservice.getCurrentUser();
//   this.covoiturageForm.value.user = currentUser.id;
  
  
//   }
addcov(covoiturage: any): void {
  // ... your existing code ...

  this.covoiturageService.addCovoiturage(covoiturage).subscribe(
    () => {
      this.listPostsCov.unshift(covoiturage);
      this.snackBar.open('Covoiturage added successfully', 'Close', {
        duration: 2000, // Set the duration of the snackbar
      });
    },
    (error) => {
      console.error(error);
      this.snackBar.open('Failed to add covoiturage', 'Close', {
        duration: 2000, // Set the duration of the snackbar
      });
    }
  );

  // ... remaining code ...
}

getAllcov(){
  this.covoiturageService.retrieveallCov().subscribe(res => {this.listPostsCov = res;
    for (let post of this.listPostsCov) {
      this.covoiturageService.getCommentsByPostId(post.id).subscribe(comments => {
        post.postComments = comments;
      });
    } });
}

/////////COMMENT 


getComments(postId:any) {
  this.covoiturageService.getCommentsByPostId(postId)
    .subscribe(comments => this.listComments = comments);
}

// addComment(postId: string, comment: any) {
//   comment.comment_author = this.storageService.getUser().username;

//   this.covoiturageService.addComment(parseInt(postId), comment).subscribe((comment) => {
//     // Update the existing list of comments
//     this.listComments.unshift(comment);
//   });

//   // Reset the comment input field
//   this.comment.comment_text = null;
// }
newCommentText: { [postId: number]: string } = {};
addComment(postId: string, commentText: string) {
  const comment: any = {
    comment_author: this.storageService.getUser().username,
    comment_text: commentText
  };

  this.covoiturageService.addComment(parseInt(postId), comment).subscribe((comment) => {
    // Update the existing list of comments for the specific post
    const postIndex = this.listPostsCov.findIndex((post) => post.id === parseInt(postId));
    if (postIndex !== -1) {
      this.listPostsCov[postIndex].postComments.unshift(comment);
    }
  });

  // Reset the comment input field for the specific post
  this.newCommentText[postId] = '';
}



}
