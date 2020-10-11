import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { APIService} from './../API.service'

@Component({
  selector: 'app-tasting',
  templateUrl: './tasting.component.html',
  styleUrls: ['./tasting.component.scss']
})
export class TastingComponent implements OnInit, OnChanges {
  @Input() tasting:any;
  tastingsBeers

  constructor(public db: APIService) { }

  ngOnInit(): void {
    this.tastingsBeers = this.tasting.Beers.items
  }

  ngOnChanges(): void {
    this.tastingsBeers = this.tasting.Beers.items
  }
  
  delete() {
    this.db.DeleteBeerTasting({id:this.tasting.id})
    for (let beer of this.tastingsBeers) {
      this.db.DeleteBeer({id: beer.id})
    }
  }
}
