import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../auth.service';

export const authGuard: CanActivateFn = async (route, state) => {
  const router = inject(Router);
  const authService = inject(AuthService);

  const isAuthenticated =authService.isLoggedIn();
  if (!isAuthenticated) {
    router.navigate(['/auth']), { queryParams: { returnUrl: state.url } };
    return false;
  }
  return true;;
  }

