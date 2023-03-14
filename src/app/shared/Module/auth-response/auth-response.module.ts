import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AuthResponseModule {
  token:any ;
  type = "Bearer" ;
  id:any ;
  username:any ;
  email:any ;
  roles:any ;
 }
