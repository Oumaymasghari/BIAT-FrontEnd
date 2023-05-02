import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { catchError, of, tap, throwError } from 'rxjs';
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
  showModal ="none";
  creditForm: FormGroup;
  result: string | null = null;
  resultatC: any;
  creditRequest:any;
  constructor(private venteachatService: VenteachatService,private userservice:UserService, private storageService: StorageService
    ,private formBuilder: FormBuilder) { }
  ngOnInit(): void {
    this.resultatC = '';
    this.currentUser = this.storageService.getUser();
    this.getvente();
   this.creditRequest={
    salaireMensuel: null,
    mensualitesCredit: null,
   }
    this.vente={
      id:null,
      user:{
        username:null,
        },
      article:null,
      
      place:null,
      contactNumber:null,
      typeVente:null,
      pictures:null,
      prix:null,

    }
    this.creditForm = this.formBuilder.group({
      salaireMensuel: ['', Validators.required],
      mensualitesCredit: [''],
      prixVente: ['', Validators.required]
    });
    }
  selectFile(event) {
    this.selectedFiles = event.target.files;
  }

  upload(vente:any) {
    this.currentFileUpload = this.selectedFiles.item(0);
    
    vente.personne3 = this.storageService.getUser().id;
   console.log("this.storageService.getUser().id "+this.storageService.getUser().id)
    this.venteachatService.addVente(this.currentFileUpload, vente) 
     .pipe(
    tap((response: any) => {
      vente.user = this.storageService.getUser();
      console.log('Response:', response);
    }),
    catchError((error: any) => {
      console.log('Error:', error);
      return throwError(error); 
    })
  ).subscribe();
      
  }

  getvente(){
    this.venteachatService.getAcceptedVentes().subscribe((ventes) => {
      this.acceptedVentes = ventes;
     
    });
   // this.vente.user.username=this.storageService.getUser().username;
  }
  
  openModal() {
    this.showModal = "block";
  }

  closeModal() {
    this.showModal = "none";
  }
  calculate(idvente) {
    const creditRequest = this.creditRequest;
    this.venteachatService.calculerCapaciteCredit(creditRequest, idvente).subscribe(
      (resp:any)=> {
        console.log("respp ");
        console.log(resp);
      this.resultatC = JSON.stringify(resp)
    },
      
    //  resultat => this.resultatCalcul = resultat,
     console.log("resultatCalcul  " +JSON.stringify(this.resultatC))
      
    );
    
  
  }
}
