import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutModule } from './about/about.module';
import { AuthModule } from './auth/auth.module';
import { ProfileModule } from './profile/profile.module';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { SharedModule } from './shared/shared.module';
import { WorkersModule } from './workers/workers.module';




@NgModule({
  declarations: [],
  imports: [
    SharedModule,
    CommonModule,
    ProfileModule,
    AboutModule,
    WorkersModule,
    AuthModule

  ],

})
export class UiModule { }
