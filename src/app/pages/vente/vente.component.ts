import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { VenteachatModule } from 'src/app/shared/Module/venteachat/venteachat.module';
import { StorageService } from 'src/app/shared/Services/storage/storage.service';
import { UserService } from 'src/app/shared/Services/user/user.service';
import { VenteachatService } from 'src/app/shared/Services/venteachat/venteachat.service';

@Component({
  selector: 'app-vente',
  templateUrl: './vente.component.html',
  styleUrls: ['./vente.component.scss']
})
export class VenteComponent  implements OnInit{
  selectedFiles: FileList;
  currentFileUpload: File;
  ventes: VenteachatModule[];
  vente: VenteachatModule ;
  acceptedVentes: any;
  currentUser: any;
  venteForm: FormGroup;
  constructor(private venteachatService: VenteachatService,private userservice:UserService, private storageService: StorageService) { }
  ngOnInit(): void {
    this.currentUser = this.storageService.getUser();
    this.getvente();
   
    this.vente={
      id:null,
      user:{
        username:null,
        },
      article:null,
      dateDisponibilite:null,
      place:null,
      contactNumber:null,
      typeVente:null,
      pictures:null,
      prix:null,

    }
    }
  selectFile(event) {
    this.selectedFiles = event.target.files;
  }

  upload(vente:any) {
    this.currentFileUpload = this.selectedFiles.item(0);
    
    vente.user.id = this.storageService.getUser().id;
    //this.vente.user.username=this.storageService.getUser().username;
    this.venteachatService.addVente(this.currentFileUpload, vente) 
      .subscribe(
        response => {
          console.log(response);
          // Do something on success, e.g. redirect to vente list page
        },
        error => {
          console.log(error);
        })
        this.vente.user = this.storageService.getUser();
        
      
        
  }

  getvente(){
    this.venteachatService.getAcceptedVentes().subscribe((ventes) => {
      this.acceptedVentes = ventes;
     
    });
   // this.vente.user.username=this.storageService.getUser().username;
  }
}
