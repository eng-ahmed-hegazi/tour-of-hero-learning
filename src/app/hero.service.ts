import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';

// if you want to use  Observable "Asynchronous Signature"
// you should import Observable and of from rxjs REACTJS
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import {MessageService} from "./message.service";

// the user should not access the data directly

@Injectable()
export class HeroService {
// inject service to another service service ask for data from another service
  constructor(private messageService: MessageService) { }
  // function that return the HEROES
    /*getHeroes(): Hero[] {
        return HEROES;
    }*/
  // return Observable<Hero[]>
    getHeroes():Observable<Hero[]> {
        this.messageService.add('HeroService: fetched heroes');
        return of(HEROES);
    }

    getHero(id: number): Observable<Hero> {
        this.messageService.add(`HeroService: fetched hero id=${id}`);
        return of(HEROES.find(hero => hero.id === id));
    }

}
