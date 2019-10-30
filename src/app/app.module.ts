import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LivingroomComponent } from './components/livingroom/livingroom.component';
import { FrontDirective } from './Shared/front.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LivingroomplaceComponent } from './pages/livingroomplace/livingroomplace.component';

@NgModule({
  declarations: [
    AppComponent,
    LivingroomComponent,
    FrontDirective,
    LivingroomplaceComponent
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
