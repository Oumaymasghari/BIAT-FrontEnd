import { Component, OnInit } from '@angular/core';

import { catchError, tap, throwError } from 'rxjs';
import { AAcommentModule } from 'src/app/shared/Module/aacomment/aacomment.module';
import { ActiviteAmicaleModule } from 'src/app/shared/Module/activite-amicale/activite-amicale.module';
import { ActiviteamicaleService } from 'src/app/shared/Services/activiteAmicale/activiteamicale.service';
import { StorageService } from 'src/app/shared/Services/storage/storage.service';
import { UserService } from 'src/app/shared/Services/user/user.service';

@Component({
  selector: 'app-amicale',
  templateUrl: './amicale.component.html',
  styleUrls: ['./amicale.component.scss']
})
export class AmicaleComponent implements OnInit {
activiteAmicale=new ActiviteAmicaleModule();
selectedFiles: FileList;
currentFileUpload: File;
currentUser: any;
listComments:any;
listPostsAA:any ;
comment:AAcommentModule;

  constructor(private activiteamicaleService: ActiviteamicaleService,private userservice:UserService,
     private storageService: StorageService
   ) { } 
  ngOnInit(): void {
    this.currentUser = this.storageService.getUser();
    this.getAA();
    this.comment={
      id:null,
      comment_text:null,
      comment_author: this.storageService.getUser().username ,
      comment_date: new Date(),
      activiteAmicaleId:null,
    }

   
  }

  selectFile(event) {
    this.selectedFiles = event.target.files;
  }
  upload(aa:any) {
    this.currentFileUpload = this.selectedFiles.item(0);
    
    aa.user = this.storageService.getUser().id;
   console.log("this.storageService.getUser().id "+this.storageService.getUser().id)
    this.activiteamicaleService.addAA(this.currentFileUpload, aa) 
     .pipe(
    tap((response: any) => {
      aa.user = this.storageService.getUser();
      console.log('Response:', response);
    }),
    catchError((error: any) => {
      console.log('Error:', error);
      return throwError(error); 
    })
  ).subscribe();
      
  }
  listeActiviteAmicale:any;
  getAA(){
    this.activiteamicaleService.getAllAA().subscribe((aa) => {
      this.listeActiviteAmicale = aa;
      for (let post of this.listPostsAA) {
        this.activiteamicaleService.getCommentsByAAId(post.id).subscribe(comments => {
          post.AAcomment = comments;
        });
      }
    });
   
  }


  //////////////////REACTION ///////////////////
  
  addReaction(id:any,reaction: any): void  {
    // console.log(JSON.stringify(this.covoiturage.id));
     this.activiteamicaleService.addReaction(id, reaction)
       .subscribe((response) => {       
           this.activiteAmicale = response;
         })    
   }
   /////////COMMENT 


getComments(AAId:any) {
  this.activiteamicaleService.getCommentsByAAId(AAId)
    .subscribe(comments => this.listComments = comments);
}

// addComment(AAId:string,comment:any) {
  
//     console.log(this.storageService.getUser().username) ;

//   comment.comment_author = this.storageService.getUser().username;
 
//   this.activiteamicaleService.addComment(parseInt(AAId), comment).subscribe((comment) => {
//     console.log(comment);
    
//     this.listPostsAA.unshift(comment);
//   });
//    // Reset the comment input field
//    this.comment.comment_text = null;
// }
newCommentText: { [AAId: number]: string } = {};
addComment(AAId:string, commentText: string) {
  const comment: any = {
    comment_author: this.storageService.getUser().username,
    comment_text: commentText
  };

  this.activiteamicaleService.addComment(parseInt(AAId), comment).subscribe((comment) => {
    // Update the existing list of comments for the specific post
    const postIndex = this.listPostsAA.findIndex((post) => post.id === parseInt(AAId));
    if (postIndex !== -1) {
      this.listPostsAA[postIndex].postComments.unshift(comment);
    }
  });

  // Reset the comment input field for the specific post
  this.newCommentText[AAId] = '';
}


}
