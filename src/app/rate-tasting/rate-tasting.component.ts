import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AddTastingComponent } from '../add-tasting/add-tasting.component';
import { Beer } from '../tasting/tasting.component';
import { APIService } from './../API.service';
import { Auth } from '@aws-amplify/auth';

type User = {
  username:string,
  email:string,
  phone:string,
}

@Component({
  selector: 'app-rate-tasting',
  templateUrl: './rate-tasting.component.html',
  styleUrls: ['./rate-tasting.component.scss']
})
export class RateTastingComponent implements OnInit {
  public createRating : FormGroup
  public user: User
  public total: number
  public submitted: boolean = false

  constructor(
    public dialogRef: MatDialogRef<AddTastingComponent>,
    @Inject(MAT_DIALOG_DATA) public beer: Beer,
    public formBuilder : FormBuilder,
    public db: APIService
  ){
    this.createRating = this.formBuilder.group({
      smell: [10, [Validators.required, Validators.min(0), Validators.max(10)]],
      color: [10, [Validators.required, Validators.min(0), Validators.max(10)]],
      branding: [10, [Validators.required, Validators.min(0), Validators.max(10)]],
      taste: [20, [Validators.required, Validators.min(0), Validators.max(20)]],
      description: ['', [Validators.required]],
    })
  }

  ngOnInit(): void {
    this.getUserInfo()
  }

  async getUserInfo() {
    const data = await Auth.currentUserPoolUser()
    this.user = {
      username: data.username,
      email: data.attributes.email,
      phone: data.attributes.phone_number
    }
  }

  rateBeer() {
    this.total = 
    ( this.createRating.controls.smell.value
    + this.createRating.controls.color.value
    + this.createRating.controls.branding.value
    + this.createRating.controls.taste.value ) * 2
    this.db.CreateBeerRating({
      userName:this.user.username,
      smell: this.createRating.controls.smell.value,
      color: this.createRating.controls.color.value,
      branding: this.createRating.controls.branding.value,
      taste: this.createRating.controls.taste.value,
      description: this.createRating.controls.taste.value,
      beerRatingBeerId: this.beer.id
    })
    this.submitted = true
  }
}
