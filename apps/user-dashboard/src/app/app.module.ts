import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { ListContactComponent } from './pages/list-contact/list-contact.component';
import { AddBookingComponent } from './pages/booking/add-booking/add-booking.component';
import { DelBookingComponent } from './pages/booking/del-booking/del-booking.component';
import { UpdateBookingComponent } from './pages/booking/update-booking/update-booking.component';
import { ShowBookingComponent } from './pages/booking/show-booking/show-booking.component';
import { ShowHistoryComponent } from './pages/history/show-history/show-history.component';
import { DelHistoryComponent } from './pages/history/del-history/del-history.component';
import { AddGroupComponent } from './pages/groups/add-group/add-group.component';
import { DelGroupComponent } from './pages/groups/del-group/del-group.component';
import { UpdateGroupComponent } from './pages/groups/update-group/update-group.component';
import { ShowGroupComponent } from './pages/groups/show-group/show-group.component';
import { FiltrageComponent } from './pages/filtrage/filtrage.component';
import { HomeComponent } from './pages/home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import {AccordionModule} from 'primeng/accordion';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import { CardComponent } from './shared/card/card.component';



const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'booking/add', component: AddBookingComponent },
  { path: 'booking/del', component: DelBookingComponent },
  { path: 'booking/update', component: UpdateBookingComponent },
  { path: 'booking/show', component: ShowBookingComponent },
  { path: 'filtrage', component: FiltrageComponent },
  { path: 'groups/add', component: AddGroupComponent },
  { path: 'groups/del', component: DelGroupComponent },
  { path: 'groups/update', component: UpdateGroupComponent },
  { path: 'groups/show', component: ShowGroupComponent },
  { path: 'history/show', component: ShowHistoryComponent },
  { path: 'history/del', component: ShowHistoryComponent },
  { path: 'contactlist', component: ListContactComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    NxWelcomeComponent,
    ListContactComponent,
    AddBookingComponent,
    DelBookingComponent,
    UpdateBookingComponent,
    ShowBookingComponent,
    ShowHistoryComponent,
    DelHistoryComponent,
    AddGroupComponent,
    DelGroupComponent,
    UpdateGroupComponent,
    ShowGroupComponent,
    FiltrageComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    CardComponent,

  ],
  imports: [BrowserModule,
    RouterModule.forRoot(routes),
    AccordionModule,
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule
    
    ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    CardComponent
  ],
})
export class AppModule {}
