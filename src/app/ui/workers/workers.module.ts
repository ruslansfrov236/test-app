import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkersComponent } from './workers.component';
import { Router, RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [WorkersComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {path:"" , component:WorkersComponent}
    ])
  ]
})
export class WorkersModule { }
