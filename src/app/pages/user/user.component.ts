import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { switchMap } from "rxjs";
import { PersonneModule } from "src/app/shared/Module/personne/personne.module";
import { UserModule } from "src/app/shared/Module/user/user.module";
import { PersonneServiceService } from "src/app/shared/Services/PersonneService/personne-service.service";
import { StorageService } from "src/app/shared/Services/storage/storage.service";

@Component({
  selector: "app-user",
  templateUrl: "user.component.html",
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  constructor(private personneServiceService:PersonneServiceService,private storageService: StorageService) {}
  personne:PersonneModule ;
  selectedFile: File ;
  currentUser: any;
   user:UserModule;
   listPersonne:any;
  ngOnInit() {
    this.currentUser = this.storageService.getUser()

    this.personne = {
      id: null,
      nom: null,
      prenom: null,
      profilePic:null,
      age: null,
      cin: null,
      email:this.storageService.getUser().email,
      dateNaissance: null,
      sexe: null,
      telPersonnel: null,
      telPoste: null,
      agence : null,
      profilePicUrl:null,
      userid:this.storageService.getUser().id
     
   }
  
   this.personneServiceService.getPersonneByUserId(this.storageService.getUser().id).subscribe(
    (per) => {
      console.log("per : "+per);
      return this.personneServiceService.getProfilePicUrl( per).subscribe(
        (data) => {
          console.log(data)
          this.personne.profilePicUrl = data;
          
        }
      );
     // return this.personneServiceService.uploadProfilePic(formData, per);
      
    })
  
   
  }

  onFileSelected(event) {
    this.selectedFile = event.target.files[0];
  }

 
  // uploadProfilePic(personneid:any): void {
  //   console.log("test");
  //   if (this.selectedFile) {
  //     this.personneServiceService.uploadProfilePic(this.selectedFile,personneid).subscribe((data) => {
  //       console.log(data);
  //       this.personne.profilePic = data.fileDownloadUri;
  //     });
  //   }
  // }
  onSubmit(): void {
    if (!this.selectedFile) {
      console.log("No file selected.");
      return;
    }

    const formData = new FormData();
    formData.append("file", this.selectedFile);
    
this.personneServiceService.getPersonneByUserId(this.storageService.getUser().id).pipe(
  switchMap((per) => {
    this.personneServiceService.getProfilePicUrl(per).subscribe(
      (data) => {
        this.personne.profilePicUrl = data;
      }
    );
    return this.personneServiceService.uploadProfilePic(formData, per);
    
  })
).subscribe(
  (data) => {
    console.log(data);
 
   // Read the uploaded file as a data URL
   const reader = new FileReader();
   reader.readAsDataURL(this.selectedFile);
   reader.onload = () => {
     // Update the personne object with the new profile picture data URL
     this.personne.profilePicUrl = reader.result as string;
   };
   this.personne.profilePicUrl = data.profilePicUrl;

    // Update the personne object with the new profile picture URL
    // this.personne.profilePic = data.fileDownloadUri;
    
  },
  (error) => {
    console.log(error);
  }
);

  }


  addPersonne(per: any){
 
    this.personneServiceService.addPersonne(per,this.storageService.getUser().id).subscribe();
  }
  getAllcov(){
    this.personneServiceService.retrieveallPersonne().subscribe(res => {this.listPersonne = res;
       });
  }
}
