import { Component, OnInit, ViewChild } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import {Sort} from '@angular/material/sort';
// import { NgxCsvParser } from 'ngx-csv-parser';
import { APIService } from '../API.service';
import { BeerRankComponent } from '../beer-rank/beer-rank.component';
import { debounceTime } from 'rxjs/operators';
import { getCurrentUser } from 'aws-amplify/auth';

type Ratings = {
  name:string,
  alcohol:number,
  smell:number,
  color:number,
  branding:number,
  taste:number,
  total:number,
  userName?:string,
}

type Ranking = {
  rank?:number
  name:string,
  description?:string,
  alcohol:number,
  smell:number,
  color:number,
  branding:number,
  taste:number,
  total:number,
  createdAt:number,
  ratings : Ratings[]
}

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.scss']
})
export class RankingComponent implements OnInit {
  public ranking: Ranking[] = [];
  public sortedData: Ranking[]
  loading:boolean = false
  range = new UntypedFormGroup({
    start: new UntypedFormControl(),
    end: new UntypedFormControl()
  });
  lastWeekCheckbox:boolean = false;
  public onlyMeCheckbox:boolean = false;
  public error:string = ""
  public descriptionFilter: string = ''
  public searchFilter: string = ''
  public userFilter: string = ''
  public user: any
  public allUsers: string[] = [];
  public selectedUsers: string[] = []; // Multiple selection

  @ViewChild('fileImportInput', { static: false }) fileImportInput: any;

  constructor(public db: APIService, 
    public dialog: MatDialog,) { }

  ngOnInit() {
    this.getRanking()
    this.range.valueChanges.pipe(
        debounceTime(200)
      ).subscribe(event => {
        this.onDateChanged();
    });
  }

  sortDataAndCreateRank() {
    this.sortData({
      active : 'total',
      direction : 'desc'
    })
    for(const rank in this.sortedData) {
      this.sortedData[rank].rank = Number(rank) + 1 
    }
  }

  async getRanking() {
    try {
      this. error = ''
      this.ranking = []
      this.loading = true
      const response = await this.db.ListBeerRatings(undefined,50000)
      this.loading = false
      // console.log(response)
      if (this.onlyMeCheckbox) {
        await this.getUserInfo()
        for( const rating of response.items) {
          this.createRanking(rating, this.user.username)
        }
      } else {
        for( const rating of response.items) {
          this.createRanking(rating)
        }
      }
      this.sortDataAndCreateRank()
      this.filterByRange()
    } catch (err) {
      this.loading = false
      console.error(err)
      this.error = 'Failed to load the ranking please press refresh.'
    }

  }

  sortData(sort: Sort) {
    var data = this.ranking.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }
    this.sortedData = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'rank': return compare(a.rank, b.rank, isAsc);
        case 'name': return compare(a.name, b.name, isAsc);
        case 'description': return compare(a.description, b.description, isAsc);
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

  filterByRange() {
    if (this.range.value['start'] && this.range.value['end'] ) {
      this.sortedData = this.sortedData.filter((a) =>{
        return a.createdAt>=this.range.value['start'] && a.createdAt<=this.range.value['end']
      })
    } else {
      this.sortDataAndCreateRank()
    }
  }

  filterByDescription() {
    if (this.descriptionFilter != '') {
      this.sortedData = this.sortedData.filter((a) =>{
        if(a.description == undefined) {
          return false
        }
        return a.description.includes(this.descriptionFilter)
      })
    } else {
      this.sortDataAndCreateRank()
    }
  }

  filterBySearchName() {
    if (this.searchFilter != '') {
      this.sortedData = this.sortedData.filter((a) =>{
        if(a.name == undefined) {
          return false
        }
        const keyword = this.searchFilter.toLowerCase();
        return a.name.toLocaleLowerCase().indexOf(keyword) > -1; 
      })
    } else {
      this.sortDataAndCreateRank()
    }
  }

  getRankingIfAlreadyExisting(beerName: string) {
    for( const ranking of this.ranking ) {
      if ( ranking.name === beerName) {
        return ranking
      }
    }
    return undefined
  }

  createRanking(rating, username=undefined) {
    if (rating.Beer == undefined) {
      return
    }
    if (username != undefined){
      if (rating.userName != username) {
        return
      }
    }
    // Collect all users
    if (rating.userName && !this.allUsers.includes(rating.userName)) {
      this.allUsers.push(rating.userName);
    }
    // If filtering on selected users
    if (this.selectedUsers.length && !this.selectedUsers.includes(rating.userName)) {
      return;
    }
    const total = 
    (rating.smell
    + rating.color
    + rating.branding
    + rating.taste ) * 2
    const newRating = {
      name: rating.Beer.name,
      beerId: rating.Beer.id,
      description: rating.Beer.description,
      alcohol: rating.Beer.alcohol,
      smell: rating.smell,
      color: rating.color,
      branding: rating.branding,
      taste: rating.taste,
      total: total,
      userName: rating.userName,
      ratingId: rating.id,
    }
    const ranking = this.getRankingIfAlreadyExisting(rating.Beer.name)
    if ( ranking === undefined ) {
      const rankingItem = {
        name: rating.Beer.name,
        beerId: rating.Beer.id,
        description: rating.Beer.description,
        alcohol: rating.Beer.alcohol,
        smell: rating.smell,
        color: rating.color,
        branding: rating.branding,
        taste: rating.taste,
        total: total,
        createdAt: Date.parse(rating.createdAt),
        ratings: [
          newRating
        ]
      }
      this.ranking.push(rankingItem)
    } else {
      ranking.ratings.push(newRating)
      ranking.smell = 0
      ranking.color = 0
      ranking.branding = 0
      ranking.taste = 0
      ranking.total = 0
      for(const beerRating of ranking.ratings) {
        ranking.smell += beerRating.smell
        ranking.color += beerRating.color
        ranking.branding += beerRating.branding
        ranking.taste += beerRating.taste
        ranking.total += beerRating.total
      }
      const length = ranking.ratings.length
      ranking.smell /= length
      ranking.color /= length
      ranking.branding /= length
      ranking.taste /= length
      ranking.total /= length
    }
  }

  openRateDialog(beer) {
    const dialogRef = this.dialog.open(BeerRankComponent, {
      // width: '90%',
      // height: '90%',
      data: beer
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }

  onDateChanged() {
    this.filterByRange()
  }

  setRangeLastWeek() {
    if (this.lastWeekCheckbox == false) {
      this.range.controls['start'].setValue(new Date(Date.now() - 7*24*60*60*1000 ))
      this.range.controls['end'].setValue(new Date(Date.now() + 24*60*60*1000))
    } else {
      this.range.controls['start'].setValue(undefined)
      this.range.controls['end'].setValue(undefined)
    }
  }

  async getUserInfo() {
    const data = await getCurrentUser()
    this.user = {
      username: data.username,
    }
  }

  setOnlyMe() {
    this.getRanking()
  }

}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
