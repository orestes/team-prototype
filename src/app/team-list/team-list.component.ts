import {Component, Input, OnInit} from '@angular/core';

// Models
import {Person} from "../../../models/person.interface";

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.sass']
})
export class TeamListComponent implements OnInit {

  @Input() people: Person[];

  constructor() { }

  ngOnInit() {
  }

}
