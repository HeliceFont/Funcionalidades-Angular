// Modulos
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{ FormsModule } from '@angular/forms';
import { routing, appRoutingProvider } from './app.routing'
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

// Componentes
import { AppComponent } from './app.component';
import { VideojuegoComponent } from './videojuego/video-juego.component';
import { ZapatillasComponent } from './zapatillas/zapatillas.component';
import { CursosComponent } from './cursos/cursos.component';
import { HomeComponent } from './home/home.component';
import { ZapatillaService } from './services/zapatilla.service';
import { ExternoComponent } from './externo/externo.component';
 // Pipes
import { CalculadoraPipe } from './pipes/calculadora.pipe';
import { ContactoComponent } from './contacto/contacto.component';

@NgModule({
  declarations: [
    AppComponent,
    VideojuegoComponent, 
    ZapatillasComponent, 
    CursosComponent, 
    HomeComponent, 
    ExternoComponent,
    CalculadoraPipe,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    RouterModule,
    HttpClientModule
  ],
  providers: [
    appRoutingProvider,
    ZapatillaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
