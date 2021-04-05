import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddTastingComponent } from '../add-tasting/add-tasting.component';
// import { APIService} from './../API.service'
import { TastingsService} from './../tastings.service'

export interface Beer {
  name: string;
  alcohol: number;
}

@Component({
  selector: 'app-tastings',
  templateUrl: './tastings.component.html',
  styleUrls: ['./tastings.component.scss']
})
export class TastingsComponent implements OnInit {
  
  beersArray : Beer [] = []
  tastings: any [] = []
  beers: any [] = []
  
  constructor(public db: TastingsService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getTastings()
    // this.getTastingsBeers()
    this.db.OnDeleteBeerTastingListener.subscribe({next: (deleteListener) => {
        console.log('delete listener: ', deleteListener)
        this.tastings = this.tastings.filter(obj => obj.id != deleteListener['value'].data.onDeleteBeerTasting.id);
      }
    })
    this.db.OnCreateBeerTastingListener.subscribe({next: (createListener) => {
        console.log('create listener: ', createListener)
        this.addTasting(createListener['value'].data.onCreateBeerTasting)
      }
    })
    this.db.OnUpdateBeerTastingListener.subscribe({next: (createListener) => {
      console.log('create listener: ', createListener)
      this.addTasting(createListener['value'].data.onCreateBeerTasting)
      }
    })
    this.db.OnCreateBeerListener.subscribe({next: (createListener) => {
      this.addCreatedBeerToTasting(createListener['value'].data.onCreateBeer)
        // this.addTasting(createListener['value'].data.onCreateBeer.BeerTasting)
      }
    })
  }

  addCreatedBeerToTasting(beer) {
    for( const tasting of this.tastings) {
      if (beer.BeerTasting.id == tasting.id ) {
        tasting.Beers.items.push(beer)
      }
    }
  }

  async getTastings() {
    const response = await this.db.ListBeerTastings()
    this.tastings = response.items
  }
  
  addTasting(tasting):boolean {
    if(tasting == undefined) { return }
    var exists = false
    for(var compareTastingId in this.tastings) {
      const compareTasting = this.tastings[compareTastingId]
      if (tasting.id == compareTasting.id) {
        this.tastings[compareTastingId] = tasting
        exists = true
      }
    }
    if (!exists) {this.tastings.push(tasting)}
  }

  // async getTastingsBeers() {
  //   const response = await this.db.ListBeers()
  //   this.beers = response.items
  //   for( const beer of this.beers ) {
  //     this.addTasting(beer.BeerTasting)
  //   }
  // }

  openAddDialog(): void {
    const dialogRef = this.dialog.open(AddTastingComponent, {
      // width: '400px',
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }

}
