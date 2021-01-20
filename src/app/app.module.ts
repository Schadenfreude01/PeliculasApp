import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Modulos
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { ComponentsModule } from './components/components.module';
import { PagesModule } from './pages/pages.module';

// Componentes
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,

    AppRoutingModule,
    ComponentsModule,
    PagesModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
