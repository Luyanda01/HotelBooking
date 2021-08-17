import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';



import { AppRoutingModule,routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { StayComponent } from './stay/stay.component';
import { ContactComponent } from './contact/contact.component';
import { BookFormComponent } from './book-form/book-form.component';
import { BookComponent } from './book/book.component';
import { HotelSlipComponent } from './hotel-slip/hotel-slip.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerProofComponent } from './customer-proof/customer-proof.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    StayComponent,
    ContactComponent,
    BookFormComponent,
    BookComponent,
    routingComponents,
    HotelSlipComponent,
    CustomerListComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
