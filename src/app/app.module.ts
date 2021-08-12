import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

//ROUTES
import { APP_ROUTING } from './app.routes';

//SERVICIOS
import { PackagedateService } from './services/packagedate.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSliderModule } from '@angular/material/slider';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { FormularioComponent } from './pages/formulario/formulario.component';

import { FormsModule } from '@angular/forms';

import { MatCardModule } from '@angular/material/card';



@NgModule({
  declarations: [
    AppComponent,
    ListadoComponent,
    NavbarComponent,
    HomeComponent,
    FormularioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    APP_ROUTING,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    FormsModule,
    MatCardModule
  ],
  providers: [PackagedateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
