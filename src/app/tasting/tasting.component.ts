import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RateTastingComponent } from '../rate-tasting/rate-tasting.component';
import { APIService} from './../API.service'

export type Beer = {
  __typename: "Beer";
  id: string;
  name: string;
  alcohol: number | null;
  description: string | null;
  createdAt: string;
  updatedAt: string;
};

export type Tasting = {
  __typename: "BeerTasting";
  id: string;
  host: string;
  Beers: {
    __typename: "ModelBeerConnection";
    items: Array<{
      __typename: "Beer";
      id: string;
      name: string;
      alcohol: number | null;
      description: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
}

@Component({
  selector: 'app-tasting',
  templateUrl: './tasting.component.html',
  styleUrls: ['./tasting.component.scss']
})
export class TastingComponent implements OnInit, OnChanges {
  @Input() tasting:Tasting;
  tastingsBeers

  constructor(public db: APIService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.tastingsBeers = this.tasting.Beers.items
  }

  ngOnChanges(): void {
    this.tastingsBeers = this.tasting.Beers.items
  }
  
  delete() {
    if(confirm("Are you sure to delete al beers and ratings? ")) {
      this.db.DeleteBeerTasting({id:this.tasting.id})
      for (let beer of this.tastingsBeers) {
        this.db.DeleteBeer({id: beer.id})
      }
    }
  }

  openRateDialog(beer) {
    const dialogRef = this.dialog.open(RateTastingComponent, {
      width: '90%',
      height: '90%',
      data: beer
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }
}
