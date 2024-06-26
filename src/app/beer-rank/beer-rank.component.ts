import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { AddTastingComponent } from '../add-tasting/add-tasting.component';
import { Sort } from '@angular/material/sort';
import { APIService } from '../API.service';
import { RateTastingComponent } from '../rate-tasting/rate-tasting.component';

@Component({
  selector: 'app-beer-rank',
  templateUrl: './beer-rank.component.html',
  styleUrls: ['./beer-rank.component.scss']
})
export class BeerRankComponent implements OnInit {
  public sortedData: any[]
  public editMode: boolean = false
  public beerName: string
  public beerDescription: string

  constructor(
    public dialogRef: MatDialogRef<AddTastingComponent>,
    @Inject(MAT_DIALOG_DATA) public beer: any,
    public db: APIService,
    public dialog: MatDialog,
  ) {
    this.beerName = this.beer.name
    this.beerDescription = this.beer.description
  }

  ngOnInit(): void {
    this.sortData({
      active: 'total',
      direction: 'desc'
    })
  }

  editBeer(): void {
    this.editMode = true
  }

  async updateBeer() {
    this.editMode = false
    await this.db.UpdateBeer({
      id: this.beer.beerId,
      name: this.beerName,
      description: this.beerDescription
    })
    this.beer.name = this.beerName
    this.beer.description = this.beerDescription
  }

  sortData(sort: Sort) {
    const data = this.beer.ratings.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }

    this.sortedData = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'rank': return compare(a.rank, b.rank, isAsc);
        case 'name': return compare(a.name, b.name, isAsc);
        case 'alcohol': return compare(a.alcohol, b.alcohol, isAsc);
        case 'smell': return compare(a.smell, b.smell, isAsc);
        case 'color': return compare(a.color, b.color, isAsc);
        case 'branding': return compare(a.branding, b.branding, isAsc);
        case 'taste': return compare(a.taste, b.taste, isAsc);
        case 'total': return compare(a.total, b.total, isAsc);
        default: return 0;
      }
    });
  }

  openRateDialog(beer) {
    const dialogRef = this.dialog.open(RateTastingComponent, {
      // width: '90%',
      // height: '90%',
      data: beer
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }

}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
