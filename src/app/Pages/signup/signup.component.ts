import { Component} from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent{
  regexValidator= /^[^@]{2,}@[^.]{2,}\.[^.]{2,}$/ ;
  isPasswordVisible1 = false;
  isPasswordVisible2 = false;
  isPasswordSame=true
  
  firstName: string = '';
  lastName: string = '';
  username: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  
  isValidated = false

  validateForm():boolean{
    this.isValidated= this.firstName!="" && this.username!="" && this.password!="" && this.confirmPassword!="" && this.regexValidator.test(this.email) && this.password==this.confirmPassword
    return this.isValidated
  }
  onSubmit() {
    if(!this.regexValidator.test(this.email)){
      console.log("email not correct")
      return;
    }

    if (this.password !== this.confirmPassword) {
      this.isPasswordSame=false;
      console.log("password not matched")
      return;
    }else{
      this.isPasswordSame=true;
    }

    const signupFormData = {
      firstName: this.firstName,
      lastName: this.lastName,
      username: this.username,
      email: this.email,
      password: this.password
    };
    console.log("Signup Form Submitted!", signupFormData);
  }

  toggleFunction1(){
    this.isPasswordVisible1 = !this.isPasswordVisible1;
    const passwordField = document.getElementById("password") as HTMLInputElement;

    if (this.isPasswordVisible1) {
      passwordField.type = "text";
    } else {
      passwordField.type = "password";
    }
  }
  toggleFunction2(){
    this.isPasswordVisible2 = !this.isPasswordVisible2;
    const passwordField = document.getElementById("confirmPassword") as HTMLInputElement;

    if (this.isPasswordVisible2) {
      passwordField.type = "text";
    } else {
      passwordField.type = "password";
    }
  }

}
