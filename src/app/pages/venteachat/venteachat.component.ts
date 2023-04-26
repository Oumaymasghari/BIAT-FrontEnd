import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { VenteachatModule } from 'src/app/shared/Module/venteachat/venteachat.module';
import { StorageService } from 'src/app/shared/Services/storage/storage.service';
import { VenteachatService } from 'src/app/shared/Services/venteachat/venteachat.service';

@Component({
  selector: 'app-venteachat',
  templateUrl: './venteachat.component.html',
  styleUrls: ['./venteachat.component.scss']
})
export class VenteachatComponent implements OnInit {
  venteachat:VenteachatModule;
  selectedFiles: any;
  currentUser: any;
  formData :FormData;
  files: File[] = [];
  form: FormGroup;
  acceptedVentes: any;
  constructor(private fb: FormBuilder,private venteachatservice:VenteachatService,private storageService: StorageService) { 
    this.form = this.fb.group({
      article: ['', Validators.required],
      dateDisponibilite: ['', Validators.required],
      prix: ['', Validators.required],
      place: ['', Validators.required],
      typeVente: ['', Validators.required],
      pictures: ['']
    });
  }
  ngOnInit(): void {
    
  this.getvente();
  }

  // addvente(formData:FormData) {
  //   console.log(this.form.value);
  
  //  formData = new FormData();
   
  //   for (let i = 0; i < this.selectedFiles.length; i++) {
  //     formData.append('file', this.selectedFiles[i]);
  //     }
   
  //   console.log(this.formData);
  //   this.venteachatservice.addvente(formData).subscribe();
  // }
  onFileSelected(event: any) {
    this.selectedFiles = event.target.files;
  }

  getvente(){
    this.venteachatservice.getAcceptedVentes().subscribe((ventes) => {
      this.acceptedVentes = ventes;
    });
  }
 
}
