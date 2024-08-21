import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LinksModule } from './links/links.module';
import { HomeComponent } from './home/home.component';
import { RouterLink, RouterModule } from '@angular/router';
import { LinksComponent } from './links/links.component';
import { VisitsModule } from './visits/visits.module';
import { WishlistModule } from './wishlist/wishlist.module';
import { TagsModule } from './tags/tags.module';
import { ContactsModule } from './contacts/contacts.module';





@NgModule({
  declarations: [],
  imports: [

    CommonModule,
    VisitsModule,
    LinksModule,
    WishlistModule,
    TagsModule,
    ContactsModule,
    RouterModule,
    RouterLink
  ],
  exports:[

  ]
})
export class ComponentsModule { }
