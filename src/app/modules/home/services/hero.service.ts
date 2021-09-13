import { Injectable } from '@angular/core';
import { Hero } from '../models/Hero';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }
      heros:Hero[]= [
        {id:1,heroname:"mohammed",rate:3,power:"html css js angular "},
        {id:2,heroname:"ahmed",rate:4,power:"html css js react "},
        {id:3,heroname:"salah",rate:5,power:"html css js vue "},
      
      ]
      get getAllHeros() {
        return [...this.heros];
      }
    

    getHero(heroId: number) {
        return {
          ...this.heros.find((hero) => {
            return hero.id ===heroId
          }),
        };
      }
}
