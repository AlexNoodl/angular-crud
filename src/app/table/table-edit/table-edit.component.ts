import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Mate} from "../../shared/interface";
import {ActivatedRoute, Router} from "@angular/router";
import {MatesService} from "../../shared/mates.service";

@Component({
  selector: 'app-table-edit',
  templateUrl: './table-edit.component.html',
  styleUrls: ['./table-edit.component.scss']
})
export class TableEditComponent implements OnInit {

  form: FormGroup;
  mate: Mate;
  id: string;

  constructor(
    private route: ActivatedRoute,
    private mateService: MatesService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.mate = this.mateService.getById(this.id);

    this.form = new FormGroup({
      first: new FormControl(this.mate[0].name.first, Validators.required),
      last: new FormControl(this.mate[0].name.last, Validators.required),
      age: new FormControl(this.mate[0].age, [Validators.required, Validators.min(18)]),
      email: new FormControl(this.mate[0].email, [Validators.required, Validators.email]),
    });
  }

  updateMate() {
    const data: Mate = {
      ...this.mate,
      name: {
        first: this.form.value.first,
        last: this.form.value.last
      },
      age: this.form.value.age,
      email: this.form.value.email
    };

    this.mateService.updateMate(data, this.id);
    this.router.navigate([''])
      .then(r => console.log('Данные были обновлены'));
  }
}
