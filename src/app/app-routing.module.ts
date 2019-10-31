import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { LivingroomplaceComponent } from './pages/livingroomplace/livingroomplace.component';
import { ExitComponent } from './pages/exit/exit.component';
import { LooseComponent } from './pages/loose/loose.component';
import { KitchenComponent } from './kitchen/kitchen.component';
import { BathroomPageComponent } from './pages/bathroom-page/bathroom-page.component';




const routes: Routes = [
  {path:'', component : LandingPageComponent},
  {path:'bathroomPage', component :BathroomPageComponent},
  //{path:'bedroom', component : BedroomComponent},
  //{path:'hallway',component : HallwayComponent },
  {path:'kitchen', component : KitchenComponent},
  {path:'living', component : LivingroomplaceComponent},
  {path:'exit', component : ExitComponent},
  {path:'loose', component: LooseComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    HttpClientModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export { routes };
