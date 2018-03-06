import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from "@angular/router";
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { PetsComponent } from './pets/pets.component';
import { PetFilterPipe } from './pets/pet-filter.pipe';
import { StarsComponent } from './stars/stars.component';
import { FatherComponent } from './father/father.component';
import { SonComponent } from './son/son.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { PetDetailComponent } from './pet-detail/pet-detail.component'

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    PetsComponent,
    PetFilterPipe,
    StarsComponent,
    FatherComponent,
    SonComponent,
    WelcomeComponent,
    PetDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    HttpModule, 
    RouterModule.forRoot([
      { path: 'pets', component: PetsComponent }, 
      { path: 'pets/:id', component: PetDetailComponent }, //detalle de una mascota
      { path: 'welcome', component: WelcomeComponent }, 
      { path: 'father', component: FatherComponent }, 
      { path: '', redirectTo: 'welcome', pathMatch: 'full' }, //URL por defecto
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' } //cualquier ruta que no matchee va al welcome
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
