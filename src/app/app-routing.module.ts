import { SearchComponent } from './components/search/search.component';
import { CharacterComponent } from './components/character/character.component';
import { CardComponent } from './components/card/card.component';
import { AboutComponent } from './components/about/about.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';



const routes: Routes = [
   {path:'home', component: HomeComponent},
   {path:'about', component: AboutComponent},
   {path:'card', component: CardComponent},
   {path:'character', component: CharacterComponent},
   {path:'search', component: SearchComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
