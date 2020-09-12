import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';

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
  createTasting:FormGroup;
  beersArray : Beer [] = []

  constructor(public formBuilder : FormBuilder) { }

  ngOnInit(): void {
    this.createTasting = this.formBuilder.group({
      location: ['', [Validators.required]],
      beers: this.formBuilder.array([
        this.getBeer()
     ])
    });
  }

  createNewTasting () {

  }

  getBeer() {
    const numberPatern = '^[0-9.,]+$';
    return this.formBuilder.group({
      name: ['', Validators.required],
      alcohol: 5,
    });
  }

  addBeer() {
    const control = <FormArray>this.createTasting.get('beers')['controls'];
    console.log(control)
    control.push(this.getBeer());
  }

  removeBeer(i: number) {
    const control = <FormArray>this.createTasting.controls['beers'];
    control.removeAt(i);
  }
}
