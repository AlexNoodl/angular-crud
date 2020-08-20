import {Component, OnInit} from '@angular/core';
import {MatesService} from "../shared/mates.service";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  public searchString = '';

  constructor(public matesService: MatesService) { };

  ngOnInit(): void {
    this.matesService.getMates()
  };

  removeMate(id: string) {
    this.matesService.removeMate(id)
  };
}
