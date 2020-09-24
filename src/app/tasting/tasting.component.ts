import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { APIService} from './../API.service'

@Component({
  selector: 'app-tasting',
  templateUrl: './tasting.component.html',
  styleUrls: ['./tasting.component.scss']
})
export class TastingComponent implements OnInit, OnChanges {
  @Input() tasting:any;
  @Input() beers:any;
  tastingsBeers

  constructor(public db: APIService) { }

  ngOnInit(): void {
    console.log(this.beers)
    this.tastingsBeers = this.beers.filter(beer => beer?.BeerTasting?.id === this.tasting.id)
    console.log(this.tastingsBeers)
  }

  ngOnChanges(): void {
    this.tastingsBeers = this.beers.filter(beer => beer?.BeerTasting?.id === this.tasting.id)
    console.log(this.tastingsBeers)
  }
  
  delete() {
    this.db.DeleteBeerTasting({id:this.tasting.id})
    for (let beer of this.tastingsBeers) {
      this.db.DeleteBeer({id: beer.id})
    }
  }
}
