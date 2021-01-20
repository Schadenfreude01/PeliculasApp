import { NgModule } from '@angular/core';

// Componentes
import { HomeComponent } from './home/home.component';
import { PeliculaComponent } from './pelicula/pelicula.component';
import { BuscarComponent } from './buscar/buscar.component';

// Componentes importados
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../components/components.module';
import { PipesModule } from '../pipes/pipes.module';
import { RatingModule } from 'ng-starrating';

@NgModule({
  declarations: [
    HomeComponent, 
    PeliculaComponent, 
    BuscarComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    PipesModule,
    RatingModule
  ]
})
export class PagesModule { }
