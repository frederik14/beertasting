import { Component, OnInit } from '@angular/core';
import {Sort} from '@angular/material/sort';
import { APIService } from '../API.service';

type Ratings = {
  name:string,
  alcohol:number,
  smell:number,
  color:number,
  branding:number,
  taste:number,
  total:number,
  userName?:string
}

type Ranking = {
  rank?:number
  name:string,
  alcohol:number,
  smell:number,
  color:number,
  branding:number,
  taste:number,
  total:number,
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

  constructor(public db: APIService) { }

  ngOnInit() {
    this.getRanking()
  }

  async getRanking() {
    const response = await this.db.ListBeerRatings()
    console.log(response)
    for( const rating of response.items) {
      this.createRanking(rating)
    }
    this.sortData({
      active : 'total',
      direction : 'asc'
    })
    for(const rank in this.sortedData) {
      this.sortedData[rank].rank = Number(rank) + 1 
    }
  }

  sortData(sort: Sort) {
    const data = this.ranking.slice();
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

  getRankingIfAlreadyExisting(beerName: string) {
    for( const ranking of this.ranking ) {
      if ( ranking.name === beerName) {
        return ranking
      }
    }
    return undefined
  }

  createRanking(rating) {
    const total = 
    (rating.smell
    + rating.color
    + rating.branding
    + rating.taste ) * 2
    const newRating = {
      name: rating.Beer.name,
      alcohol: rating.Beer.alcohol,
      smell: rating.smell,
      color: rating.color,
      branding: rating.branding,
      taste: rating.taste,
      total: total,
      userName: rating.userName
    }
    const ranking = this.getRankingIfAlreadyExisting(rating.Beer.name)
    if ( ranking === undefined ) {
      const rankingItem = {
        name: rating.Beer.name,
        alcohol: rating.Beer.alcohol,
        smell: rating.smell,
        color: rating.color,
        branding: rating.branding,
        taste: rating.taste,
        total: total,
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

}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
