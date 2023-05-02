import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TypeventeModule } from '../typevente/typevente.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class VenteachatModule {
  id:any;
  article:any ;
 
  prix:any ;
  place:any ;
  contactNumber:any;
  typeVente:TypeventeModule ;
  user :any;
  pictures:any ;
 }
