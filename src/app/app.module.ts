import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { EscuelaModule } from './escuela.module';
import { GruposService } from './servicios/grupos.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    EscuelaModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    GruposService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
