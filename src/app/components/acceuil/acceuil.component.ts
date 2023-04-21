import { Component } from '@angular/core';
import { PersonneModule } from 'src/app/shared/Module/personne/personne.module';
import { PersonneServiceService } from 'src/app/shared/Services/PersonneService/personne-service.service';


@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.scss']
})
export class AcceuilComponent {
  personne:PersonneModule ;

  constructor(private PersonneServiceService:PersonneServiceService ) {
   }
  ngOnInit() { 
  
  }
  addPersonne(per: any,userid:any){
 
    this.PersonneServiceService.addPersonne(per,userid).subscribe();
  }

}
