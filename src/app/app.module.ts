import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BathroomPageComponent } from './pages/bathroom-page/bathroom-page.component';
import { LivingroomComponent } from './components/livingroom/livingroom.component';
import { FrontDirective } from './shared/front.directive';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { LpAnimationComponent } from './components/lp-animation/lp-animation.component';
import { MatDialogModule } from '@angular/material';


import { LivingroomplaceComponent } from './pages/livingroomplace/livingroomplace.component';
import { ExitComponent } from './pages/exit/exit.component';
import { LooseComponent } from './pages/loose/loose.component';

@NgModule({
  declarations: [
    AppComponent,
    BathroomPageComponent,
    LandingPageComponent,
    LpAnimationComponent,
    LivingroomComponent,
    FrontDirective,
    LivingroomplaceComponent,
    ExitComponent,
    LooseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDialogModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents : [LivingroomComponent]
})
export class AppModule { }
