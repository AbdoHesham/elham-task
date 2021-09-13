import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { faUser } from '@fortawesome/free-solid-svg-icons';
import { HeroService } from '../../services/hero.service';

@Component({
  selector: 'app-single-hero',
  templateUrl: './single-hero.component.html',
  styleUrls: ['./single-hero.component.scss']
})
export class SingleHeroComponent implements OnInit {
  hero: any;
id:any;
  faUser=faUser;
  constructor(    private _activedRoute: ActivatedRoute,
    private _HeroService:HeroService    ) { }

  ngOnInit(): void {
    this.id = this._activedRoute.snapshot.params['id'];
    this.getHero()
// console.log( this.hero)
  }

  getHero(){
this.hero= this._HeroService.getHero(this.id)
console.log(this.hero)
  }

}
