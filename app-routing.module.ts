import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
 

import { AboutComponent } from './about/about.component';
import { BookFormComponent } from './book-form/book-form.component';
import { BookComponent } from './book/book.component';
import {  BookpageComponent } from './bookpage/bookpage.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { StayComponent } from './stay/stay.component';
import { CustomerProofComponent } from './customer-proof/customer-proof.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'stay',component:StayComponent},
  {path:'contact',component:ContactComponent},
  {path:'book',component:BookComponent},
  {path:'bookForm',component:BookFormComponent}, 
  {path:'bookpage',component:BookpageComponent},
  {path:'customerProof',component:CustomerProofComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents= [BookpageComponent]
