import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyNavComponent } from './my-nav/my-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatCardModule, MatSelectModule } from '@angular/material';
import { PokemonsService } from './pokemons.service';
import { PokemonNumberComponent } from './pokemon-number/pokemon-number.component';
import { PokemonTypeComponent } from './pokemon-type/pokemon-type.component';

const appRoutes: Routes = [
  { path: 'pokemon-number', component: PokemonNumberComponent },
  { path: 'pokemon-type', component: PokemonTypeComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    MyNavComponent,
    PokemonNumberComponent,
    PokemonTypeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatSelectModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [PokemonsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
