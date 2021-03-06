import { Component, OnDestroy, OnInit } from '@angular/core';
import { from, Subscription } from 'rxjs';
import { HeroService } from '../../services/hero.service';
// import { Product } from '../../models/Product';
// import { Hero } from '../../models/Hero';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { Hero } from '../../models/Hero';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  faStar=faStar;

  heros: Hero[]=[];
  // productsFiltered: Product[];
  Subscription = new Subscription();
  isLoading:boolean = false;
  constructor(private _HeroService:HeroService) {
    // this.Subscription.add(this._productsService.filterUseCategory.subscribe(cateName => cateName == 'all' ? this.getAllProuducts() : this.getFilterdProuducts(cateName)));
    // this.Subscription.add(this._productsService.serarchWord.subscribe(word => this.searchOnProuducts(word)))


  }



  ngOnInit(): void {
    this.getAllHeros();
  }


  getAllHeros() {
    // this.isLoading = true
   this.heros= this._HeroService.getAllHeros

    // this.isLoading = false
return this.heros
  }

  // getFilterdProuducts(cateName) {
  //   this.isLoading = true
  //   this.Subscription.add(this._productsService.getFilterdProuducts(cateName).subscribe(item => {
  //     this.products = item as Product[];
  //     this.productsFiltered = this.products;
  //     this.isLoading = false

  //   }))
  // }

  searchOnProuducts(word) {
    // this.productsFiltered = this.products.filter(product => product.title.toLowerCase().includes(word.toLowerCase()));

  }

  // unsubscribe all observables to  be garbage collectable for high peformanc ,no memory leaks
    ngOnDestroy() {
    this.Subscription.unsubscribe()
  }

}
