import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../service/auth.service';


@Component({
  selector: 'navbar',
  standalone:false,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent  {

  private auth = inject(AuthService);
  private router = inject(Router)





  LogOut(){
     this.auth.sigInOut();
     this.router.navigate(['/auth'])
  }
}
