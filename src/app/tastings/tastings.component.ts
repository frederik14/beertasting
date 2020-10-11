import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { APIService} from './../API.service'
import { AddTastingComponent } from './../add-tasting/add-tasting.component'

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
  
  constructor(public db: APIService, public dialog: MatDialog) { }

  ngOnInit(): void {
    // this.getTastings()
    this.getTastingsBeers()
    this.db.OnDeleteBeerTastingListener.subscribe({next: (deleteListener) => {
        console.log('delete listener: ', deleteListener)
        this.tastings = this.tastings.filter(obj => obj.id != deleteListener['value'].data.onDeleteBeerTasting.id);
      }
    })
    // this.db.OnCreateBeerTastingListener.subscribe({next: (createListener) => {
    //     console.log('create listener: ', createListener)
    //     this.tastings.push(createListener['value'].data.onCreateBeerTasting)
    //   }
    // })
    this.db.OnCreateBeerListener.subscribe({next: (createListener) => {
        console.log('create listener: ', createListener)
        this.beers.push(createListener['value'].data.onCreateBeer)
        this.addTasting(createListener['value'].data.onCreateBeer.BeerTasting)
      }
    })
  }

  async getTastings() {
    const response = await this.db.ListBeerTastings()
    console.log(response)
    this.tastings = response.items
  }
  
  addTasting(tasting):boolean {
    if(tasting == undefined) { return }
    var exists = false
    for(var compareTasting of this.tastings) {
      if (tasting.id == compareTasting.id) {
        compareTasting = tasting
        exists = true
      }
    }
    if (!exists) {this.tastings.push(tasting)}
  }

  async getTastingsBeers() {
    const response = await this.db.ListBeers()
    this.beers = response.items
    for( const beer of this.beers ) {
      this.addTasting(beer.BeerTasting)
    }
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddTastingComponent, {
      width: '400px',
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }

}
