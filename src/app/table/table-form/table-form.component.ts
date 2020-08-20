import { Component, OnInit } from '@angular/core';
import {MatesService} from "../../shared/mates.service";
import {Mate} from "../../shared/interface";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-table-form',
  templateUrl: './table-form.component.html',
  styleUrls: ['./table-form.component.scss']
})
export class TableFormComponent implements OnInit {
  form: FormGroup;
  first = '';
  last = '';
  age = null;
  email = '';

  constructor(private mateService: MatesService) { };

  ngOnInit(): void {
    this.form = new FormGroup({
      first: new FormControl(this.first, Validators.required),
      last: new FormControl(this.last, Validators.required),
      age: new FormControl(this.age, [Validators.required, Validators.min(18)]),
      email: new FormControl(this.email, [Validators.required, Validators.email]),
    })
  };

  generateGUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      const r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
      return v.toString(16);
    });
  };

  addMate() {
    const mate: Mate = {
      guid: this.generateGUID(),
      age: this.form.value.age,
      name: {
        first: this.form.value.first,
        last: this.form.value.last
      },
      email: this.form.value.email
    }

    this.mateService.addMate(mate);
    this.form.reset();
  };
}
