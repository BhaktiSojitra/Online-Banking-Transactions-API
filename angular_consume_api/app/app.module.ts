import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AngularAPIComponent } from './angular-api/angular-api.component';
import { BankDetailsComponent } from './bank-details/bank-details.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { EditComponent } from './edit/edit.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddComponent } from './add/add.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AngularAPIComponent,
    BankDetailsComponent,
    HomeComponent,
    EditComponent,
    AddComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
