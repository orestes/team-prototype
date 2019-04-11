import { Component, OnInit } from '@angular/core';
import {TeamService} from "../services/team.service";
import {Observable} from "rxjs";

import {Person} from "../../../models/person.interface";

@Component({
  selector: 'app-team-page',
  templateUrl: './team-page.component.html',
  styleUrls: ['./team-page.component.sass']
})
export class TeamPageComponent implements OnInit {

  public people$: Observable<Person[]>;

  constructor(
    private teamService: TeamService,
  ) { }

  ngOnInit() {
    this.people$ = this.teamService.getTeam();
  }

}
