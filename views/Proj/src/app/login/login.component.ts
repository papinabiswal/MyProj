import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers : [DataService]
})
export class LoginComponent implements OnInit {
  userName : any;
  password : any;
  isSignInPage = true;
  isSignUpClicked = false;
  isPasswordhanged = false;
  userDetails : any;
  constructor(  private router: Router , private dataService : DataService) { }
  signIn(){
    this.dataService.authenticateUser(this.userName, btoa(this.password))  //Encode password in base-64
    .then( authenticateUser => {
      if(authenticateUser.length >0){
        this.isSignInPage = false;
        this.isSignUpClicked = false;
        this.isPasswordhanged = false;
        this.router.navigate(['/dashboard']);
      }else{
        this.isSignInPage = true;
        this.isSignUpClicked = false;
        this.isPasswordhanged = false;
      }
     
    })
   
  }
  forgetPassword(){
    this.isSignInPage = false;
    this.isSignUpClicked = false;
    this.isPasswordhanged = true;
    console.log('forget password');
  }

  onStateChanged(selectedValue : boolean){
    console.log(selectedValue);
    this.isSignUpClicked = selectedValue;
    this.isSignInPage = true;
  }
  onForgetPassword(selectedValue : boolean){
    this.isPasswordhanged = selectedValue;
    this.isSignInPage = true;
  }
  signUp(){
    this.isSignInPage = false;
    this.isSignUpClicked = true;
    this.isPasswordhanged = false;
  console.log('SignIn');
  }
  ngOnInit() {
    
  }

}
