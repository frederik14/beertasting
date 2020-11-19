import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-geocache',
  templateUrl: './geocache.component.html',
  styleUrls: ['./geocache.component.scss']
})
export class GeocacheComponent implements OnInit {
  geochache: FormGroup
  correct : Boolean

  constructor(public formBuilder : FormBuilder,) {
    this.geochache = this.formBuilder.group({
      answer: ['', [Validators.required]],
    })
  }

  ngOnInit(): void {
  }

  submit() {
    if (this.geochache.controls.answer.value == 1.25) {
      this.correct = true
    }
    this.correct = false
  }

}
