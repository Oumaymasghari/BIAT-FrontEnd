import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ERoleModule } from '../erole/erole.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class UserModule { 
  id:any;
  username:any;
  email:any;
  password:any;
 role:any;
}
