import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-geocache',
  templateUrl: './geocache.component.html',
  styleUrls: ['./geocache.component.scss']
})
export class GeocacheComponent implements OnInit {
  geochache: UntypedFormGroup
  correct : Boolean
  answer: Number

  constructor(public formBuilder : UntypedFormBuilder,) {
  }

  ngOnInit(): void {
  }

  submit() {
    console.log("answer: ", this.answer)
    if (this.answer === 1.25) {
      this.correct = true
      console.log('correct', this.correct)
    } else {
      this.correct = false
    }
  }

}
