import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { AuthService } from './service/auth.service';
import { CommonModule } from '@angular/common';
import { UiModule } from './ui/ui.module';

@Component({
  selector: 'app-root',
  imports: [CommonModule, UiModule, RouterOutlet],
  template: '<router-outlet></router-outlet>',
})
export class AppComponent implements OnInit {
  title = '';

  public authorize = inject(AuthService);
  private router = inject(Router);

  async ngOnInit(): Promise<void> {
    await this.checkAndNavigate();
  }

  private async checkAndNavigate(): Promise<void> {
    try {
      const isUserLoggedIn = await this.authorize.isLoggedIn();
      const route = isUserLoggedIn ? '' : '/auth';
      await this.router.navigate([route]);
    } catch (error) {
      console.error('Error checking login status', error);
     this.router.navigate(['/auth']);
    }
  }
}
