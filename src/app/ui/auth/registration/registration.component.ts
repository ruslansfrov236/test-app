import { Component, inject, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../service/auth.service';
import { callbackify } from 'util';

@Component({
  selector: 'app-registration',
  standalone: false,
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent implements OnInit {
  selectedFile:File| null;
  @Input()errorMessage:string;
  @Input()errorPasswordMessage:string;
  private authService = inject(AuthService);
  private router = inject(Router)
  private fb = inject(FormBuilder);
  myForm: FormGroup;
  ngOnInit() {
    debugger
    this.myForm = this.fb.group({

      email :['', [Validators.email , Validators.required]],
      name: ['', [Validators.required]],
      image: ['', [Validators.required]],
      password: ['', Validators.required,Validators.minLength(8)],
      confirmPassword: ['', Validators.required,Validators.minLength(8) ],
    });
  }
  onFileChange(event: Event): Promise<{ file: File, base64Image: string | ArrayBuffer | null }> {
    return new Promise((resolve, reject) => {
      const input = event.target as HTMLInputElement;
      if (input.files && input.files.length ) {
        const _file = input.files[0];
        if (_file.type.startsWith('image/')) {
          this.selectedFile = _file;
        } else {
          this.errorMessage="No file type image"

        }

      } else {
        this.errorMessage='No file selected';
      }
    });
  }

  async onSubmit() {
  debugger
    if (this.myForm.valid) {


      const name = this.myForm.value.name;
      const password = this.myForm.value.password;
     const confirmPassword = this.myForm.value.confirmPassword;
     const email = this.myForm.value.email;
     const image = this.selectedFile.name;


     if(password===confirmPassword){
      await this.authService.signUp(name, password,confirmPassword,  email, image , ()=>{
        this.router.navigate(['/auth'])
      })

     }
      this.errorPasswordMessage = 'Passwords do not match. Please try again.';







    }
  }
}
