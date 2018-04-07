import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { ClienteComponent } from './cliente/cliente.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { ClienteService } from './services/cliente.service';
import { CategoriaComponent } from './categoria/categoria.component';
import { CategoriaService } from './services/categoria.service';



@NgModule({
  declarations: [
    AppComponent,
    ClienteComponent,
    CategoriaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
   ],
  providers: [ClienteService, CategoriaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
