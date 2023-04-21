import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserModule } from '../shared/Module/user/user.module';
import { StorageService } from '../shared/Services/storage/storage.service';
import { UserService } from '../shared/Services/user/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  staticAlertClosed3 = false;
  showModal ="none";
 // form : UserModule;
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  form: any = {
    username: null,
    email: null,
    password: null,
    role:null
  };
  form1: any = {
    username: null,
    password: null
  };
  isLoggedIn = false;
  isLoginFailed = false;

  roles: string[] = [];
 
  constructor(private userService: UserService, private storageService: StorageService,private router: Router,private userservice:UserService) { }

  ngOnInit(): void {
    if (this.storageService.isLoggedIn()) {
      this.isLoggedIn = true;
      this.roles = this.storageService.getUser().roles;
    }

  }
 
  openModal() {
    this.showModal = "block";
  }

  closeModal() {
    this.showModal = "none";
  }
  
  // register
  onSubmit(): void {
    const { username, email, password } = this.form;

    this.userService.signup(username, email, password).subscribe({
      next: data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        this.router.navigate(['/home']);
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    });
  }
  
 //login 

 login(): void {
  const { username, password } = this.form1;

  this.userService.signin(username, password).subscribe({
    next: data => {
      this.storageService.saveUser(data);

      this.isLoginFailed = false;
      this.isLoggedIn = true;
      this.roles = this.storageService.getUser().roles;
      this.router.navigate(['/dashboard']);
    },
    error: err => {
      this.errorMessage = err.error.message;
      this.isLoginFailed = true;
    }
  });
 
}





}
