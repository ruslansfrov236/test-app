import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { RouterLink, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [LoginComponent , RegistrationComponent],
  imports: [
    CommonModule,
    RouterLink,
    ReactiveFormsModule,
    RouterModule.forChild([
      {path:"" , component:LoginComponent},
      {path:"registration" , component:RegistrationComponent}
    ])

  ]
})
export class AuthModule { }
