import { NgModule } from '@angular/core';

// Componentes importados
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Componentes exportados
import { NavbarComponent } from './navbar/navbar.component';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { PeliculasPosterGridComponent } from './peliculas-poster-grid/peliculas-poster-grid.component';
import { CastSlideshowComponent } from './cast-slideshow/cast-slideshow.component';

// Importacion sistema de estrellas
import { RatingModule } from 'ng-starrating';

// Importacion de los Pipes
import { PipesModule } from '../pipes/pipes.module';

@NgModule({
  declarations: [
    NavbarComponent,
    SlideshowComponent,
    PeliculasPosterGridComponent,
    CastSlideshowComponent
  ],
  exports: [
    NavbarComponent,
    SlideshowComponent,
    PeliculasPosterGridComponent,
    CastSlideshowComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    RatingModule,
    PipesModule
  ]
})
export class ComponentsModule { }
