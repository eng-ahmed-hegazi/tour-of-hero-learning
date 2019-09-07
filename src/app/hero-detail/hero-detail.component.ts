import { Component, OnInit,Input} from '@angular/core';
import { Hero } from '../hero';
// this Imports added to get the id from the URL
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
    // will contain value when the user Select Hero
    @Input() hero: Hero;
    // inject the imports on the constructor

    /* - ActivatedRoute --> holds information about the route to this instance of the HeroDetailComponent
       - HeroService --> gets hero data from the remote server and this component will use it to get the
            (hero-to-display)
       - location --> is an Angular service for interacting with the browser. You'll use it later to
            (navigate back) to the view that navigated here
    */

    constructor(private route: ActivatedRoute,
                private heroService: HeroService,
                private location: Location) {

    }

    ngOnInit(): void {
        this.getHero();
    }
    getHero(): void {
        const id = +this.route.snapshot.paramMap.get('id');
        this.heroService.getHero(id)
            .subscribe(hero => this.hero = hero);
    }

    goBack(): void {
        this.location.back();
    }

}
