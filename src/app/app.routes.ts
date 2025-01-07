import { Routes } from '@angular/router';
import { HomeComponent } from './ui/home/home.component';
import { authGuard } from './service/guard/auth.guard';

export const routes: Routes = [

  {path:'', component :HomeComponent ,canActivate:[authGuard]   },
  {path:'profile', loadChildren :()=> import('./ui/profile/profile.module').then(a=>a.ProfileModule),canActivate:[authGuard]  },
  {path:'about' , loadChildren :()=> import('./ui/about/about.module').then(a=>a.AboutModule), canActivate:[authGuard] },
  {path:"workers-list", loadChildren :()=> import('./ui/workers/workers.module').then(a=>a.WorkersModule), canActivate:[authGuard]},
  {path:'auth', loadChildren:()=> import('./ui/auth/auth.module').then(a=>a.AuthModule)}
];
