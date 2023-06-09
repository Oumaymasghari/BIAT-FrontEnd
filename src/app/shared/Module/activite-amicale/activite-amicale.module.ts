import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class ActiviteAmicaleModule { 
  id:any;

  description:any ;
  cathegorie:any ;
  datePost :any;
  user:any;
  AAcomment:any;
  enseigne:any;
  nbMots:any;
  picturesAmicales:any ;
// Reaction properties
likeCount: number = 0 ;
loveCount: number = 0;
thumbsUpCount: number= 0;
thumbsDownCount: number= 0;
celebrationCount: number= 0;

constructor() {
  this.likeCount = 0;
  this.loveCount = 0;
  this.thumbsUpCount = 0;
  this.thumbsDownCount = 0;
  this.celebrationCount = 0;
}

}
