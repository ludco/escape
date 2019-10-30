import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LivingroomComponent } from './livingroom/livingroom.component';
import { FrontDirective } from './front.directive';

@NgModule({
  declarations: [
    AppComponent,
    LivingroomComponent,
    FrontDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
