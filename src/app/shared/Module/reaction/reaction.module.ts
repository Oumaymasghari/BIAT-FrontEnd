import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CovoiturageModule } from '../covoiturage/covoiturage.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class ReactionModule {
  id: number;
  emoji: string;
  covoiturage : CovoiturageModule;

 }
