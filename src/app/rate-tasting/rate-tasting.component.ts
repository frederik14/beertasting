import { Component, Inject, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AddTastingComponent } from '../add-tasting/add-tasting.component';
import { Beer } from '../tasting/tasting.component';
import { APIService } from './../API.service';
import { getCurrentUser } from 'aws-amplify/auth';

type User = {
  username: string,
  email: string,
  phone: string,
}

@Component({
  selector: 'app-rate-tasting',
  templateUrl: './rate-tasting.component.html',
  styleUrls: ['./rate-tasting.component.scss']
})
export class RateTastingComponent implements OnInit {
  public createRating: UntypedFormGroup
  public user: any
  public total: number
  public submitted: boolean = false
  public rating: any
  public rated: boolean = false
  public errorMsg: string = '';

  constructor(
    public dialogRef: MatDialogRef<AddTastingComponent>,
    @Inject(MAT_DIALOG_DATA) public beer: any,
    @Inject(UntypedFormBuilder) public formBuilder: UntypedFormBuilder,
    public db: APIService
  ) {
    this.createRating = this.formBuilder.group({
      smell: [10, [Validators.required, Validators.min(0), Validators.max(10)]],
      color: [10, [Validators.required, Validators.min(0), Validators.max(10)]],
      branding: [10, [Validators.required, Validators.min(0), Validators.max(10)]],
      taste: [20, [Validators.required, Validators.min(0), Validators.max(20)]],
      description: ['', [Validators.required]],
    })
  }

  ngOnInit(): void {
    if (this.beer?.userName == undefined) {
      this.getUserInfo()
    } else {
      this.setUserInfo()
    }
  }

  async getUserInfo() {
    const data = await getCurrentUser()
    this.user = {
      username: data.username,
    }

    this.rating = await this.getRating()
    if (this.rating) {
      this.rated = true
      this.createRating.controls.smell.setValue(this.rating.smell)
      this.createRating.controls.color.setValue(this.rating.color)
      this.createRating.controls.branding.setValue(this.rating.branding)
      this.createRating.controls.taste.setValue(this.rating.taste)
    }
  }

  setUserInfo() {
      this.rated = true
      this.createRating.controls.smell.setValue(this.beer.smell)
      this.createRating.controls.color.setValue(this.beer.color)
      this.createRating.controls.branding.setValue(this.beer.branding)
      this.createRating.controls.taste.setValue(this.beer.taste)
  }

  async getRating() {
    const ratings = await this.db.ListBeerRatings(
      {
        userName: {
          eq: this.user.username
        },
      }, 100000)
    for(const rating of ratings.items) {
      if(rating.Beer && rating.Beer.id == this.beer.id) {
        return rating
      }
    }
    return undefined
  }

  rateBeer() {
    this.errorMsg = '';
    const smell = this.createRating.controls.smell.value;
    const color = this.createRating.controls.color.value;
    const branding = this.createRating.controls.branding.value;
    const taste = this.createRating.controls.taste.value;

    if (
      smell < 0 || smell > 10 ||
      color < 0 || color > 10 ||
      branding < 0 || branding > 10 ||
      taste < 0 || taste > 20
    ) {
      this.errorMsg = 'Smell, Color, and Branding must be between 0 and 10. Taste must be between 0 and 20.';
      return;
    }

    this.total = (smell + color + branding + taste) * 2;
    this.db.CreateBeerRating({
      userName: this.user.username,
      smell,
      color,
      branding,
      taste,
      description: this.createRating.controls.taste.value,
      beerRatingBeerId: this.beer.id
    })
    this.submitted = true
  }

  updateBeer() {
    this.errorMsg = '';
    const smell = this.createRating.controls.smell.value;
    const color = this.createRating.controls.color.value;
    const branding = this.createRating.controls.branding.value;
    const taste = this.createRating.controls.taste.value;

    if (
      smell < 0 || smell > 10 ||
      color < 0 || color > 10 ||
      branding < 0 || branding > 10 ||
      taste < 0 || taste > 20
    ) {
      this.errorMsg = 'Smell, Color, and Branding must be between 0 and 10. Taste must be between 0 and 20.';
      return;
    }

    this.total = (smell + color + branding + taste) * 2;
    const user = this.user ? this.user.username  : this.beer?.userName
    const beer_id = this.beer?.id ? this.beer.id  : this.beer?.beerId
    const rating_id = this.rating?.id ? this.rating.id  : this.beer?.ratingId
    this.db.UpdateBeerRating({
      id: rating_id,
      userName: user,
      smell,
      color,
      branding,
      taste,
      description: this.createRating.controls.taste.value,
      beerRatingBeerId: beer_id
    })
    this.submitted = true
  }
}
