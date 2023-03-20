import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class CovoiturageModule { 

  id:number;
 heureDepart :any;
 depart :any;
 arrivee :any;
 datedepart :any;
 nbPersonne :any;
 prix :any;
 contactNumber :any;

datePost:any;
user:any;
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
