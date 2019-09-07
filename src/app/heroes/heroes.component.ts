import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';


// first you should import the HeroServices in the Component
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes:Hero[]
  // selectedHero: Hero;

  // inject the Service in the component constructor
  constructor(private heroService: HeroService) {

  }
  // function that call the service function
  /*getHeroes(): void {
      // this.heroService.getHeroes() --> is Synchronous Signature
        this.heroes = this.heroService.getHeroes();
  }*/
  /* -------------------------------------------------------------------------------
  The Mean of Synchronous Signature
        that mean that hearoServices can fetch data Synchronous this is not happen ;(
        because actually you get the data from a remote server "Asynchronous" then we
        should use Observable with Http and get
  ----------------------------------------------------------------------------------*/

    getHeroes(): void {
        this.heroService.getHeroes()
        // key:heroes represents --> this.heroService.getHeroes()
            .subscribe(heroes => this.heroes = heroes);
        // after this step the heroes variable is contain the HEROES array
    }

  // onSelect function
  // onSelect(hero: Hero): void {
  //     this.selectedHero = hero;
  // }

    ngOnInit() {
        this.getHeroes();
  }

}
