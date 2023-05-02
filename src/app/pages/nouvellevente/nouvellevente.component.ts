import { Component ,OnInit} from '@angular/core';
import { VenteachatModule } from 'src/app/shared/Module/venteachat/venteachat.module';
import { VenteachatService } from 'src/app/shared/Services/venteachat/venteachat.service';

@Component({
  selector: 'app-nouvellevente',
  templateUrl: './nouvellevente.component.html',
  styleUrls: ['./nouvellevente.component.scss']
})
export class NouvelleventeComponent implements OnInit {

  listVente :any;
  vente:VenteachatModule[] = [];
  constructor(private  venteachatService : VenteachatService){}
  ngOnInit(): void {
    this.getAllventes();
    
 
}

getAllventes(){
  this.venteachatService.getAllvente().subscribe(res => this.listVente=res)
}
acceptVente(id:any) {
  this.venteachatService.acceptVente(id).subscribe(() => {
    this.vente = this.vente.filter(vente => vente.id !== id);
    this.venteachatService.deleteAcceptedVentes().subscribe();
  });
}
}