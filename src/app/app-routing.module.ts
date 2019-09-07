import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import all routing Components
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

// routes written in const variable {path:'',component:}
const routes: Routes = [
    // default route
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'detail/:id', component: HeroDetailComponent },
    { path: 'heroes', component: HeroesComponent },
    { path: 'dashboard', component: DashboardComponent }
];

@NgModule({
    // important !! should be added to enable routes
    imports: [ RouterModule.forRoot(routes) ],
    exports:[
      RouterModule
  ]
})


export class AppRoutingModule {




}
