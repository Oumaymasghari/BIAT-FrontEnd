import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class CovoiturageModule { 

id:any
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
likeCount: number;
loveCount: number;
thumbsUpCount: number;
thumbsDownCount: number;
celebrationCount: number;


constructor() {
  this.likeCount = 0;
  this.loveCount = 0;
  this.thumbsUpCount = 0;
  this.thumbsDownCount = 0;
  this.celebrationCount = 0;
}


}
