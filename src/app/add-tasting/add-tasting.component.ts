import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { APIService } from './../API.service';

@Component({
  selector: 'app-add-tasting',
  templateUrl: './add-tasting.component.html',
  styleUrls: ['./add-tasting.component.scss']
})
export class AddTastingComponent {
  createTasting:FormGroup;

  constructor(
    public dialogRef: MatDialogRef<AddTastingComponent>, public formBuilder : FormBuilder, public db: APIService) {
      this.createTasting = this.formBuilder.group({
        location: ['', [Validators.required]],
        beers: this.formBuilder.array([
          this.getBeer()
       ])
      });
    }

  onNoClick(): void {
    this.dialogRef.close();
  }

  async createNewTasting () {
    const response = await this.db.CreateBeerTasting({
      host: this.createTasting.controls['location'].value,
    })
    console.log(this.createTasting.controls['beers'])
    for (let beer of this.createTasting['controls']['beers']['controls']) {
      console.log(beer)
      this.db.CreateBeer({
        name: beer.controls.name.value,
        alcohol: beer.controls.alcohol.value,
        beerBeerTastingId: response.id
      })
    }
    this.dialogRef.close();
  }

  getBeer() {
    return this.formBuilder.group({
      name: ['', Validators.required],
      alcohol: [5, Validators.required],
    });
  }

  addBeer() {
    const control = <FormArray>this.createTasting.get('beers')['controls'];
    console.log('full form ',this.createTasting)
    control.push(this.getBeer());
  }

  removeBeer(i: number) {
    const control = <FormArray>this.createTasting.controls['beers'];
    control.removeAt(i);
  }

}
