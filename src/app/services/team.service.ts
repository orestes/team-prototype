import { Injectable } from '@angular/core';

// Rx
import {Observable} from "rxjs";
import {of} from "rxjs";

import * as db from '../../../data/db.json';

// Models
import {Person} from "../../../models/person.interface";

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor() { }

  public getTeam(): Observable<Person[]> {
    return of(db.team);
  }
}
