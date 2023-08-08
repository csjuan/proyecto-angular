import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

    public emailControl = new FormControl('',[Validators.email, Validators.required]);
    public passwordControl = new FormControl('',[ Validators.required]);

   public formlogin = new FormGroup({
    email: this.emailControl,
    password: this.passwordControl,
   });

   constructor(private authService: AuthService) {}

   login(): void{
    if (this.formlogin.invalid){
        this.formlogin.markAllAsTouched();
    }else{
        this.authService.login(this.formlogin.getRawValue())
    }
   }

}
