import { Component, inject, OnInit } from '@angular/core';
import { AuthService } from '../../../service/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
   standalone:false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  private authService = inject(AuthService);
  private router = inject(Router)
  private fb = inject(FormBuilder);
  myForm: FormGroup;
  ngOnInit() {
    this.myForm = this.fb.group({
      name: ['', [Validators.required]],
      password: ['', Validators.required
      ]
    });
  }

  async onSubmit() {


    if (this.myForm.valid) {

      const name = this.myForm.value.name;
      const password = this.myForm.value.password;
      function generateRandomToken(length: number = 32): string {
        const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let token = '';
        for (let i = 0; i < length; i++) {
          const randomIndex = Math.floor(Math.random() * charset.length);
          token += charset[randomIndex];
        }
        return token;
      }


      const token = generateRandomToken(32);
      console.log(token);


     await this.authService.signIn(name, password, ()=>{

      localStorage.setItem('user' , token)
         this.router.navigate(["/"])
     })



    }
  }
}
