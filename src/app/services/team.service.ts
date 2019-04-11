import { Injectable } from '@angular/core';

// Rx
import {Observable} from "rxjs";
import {of} from "rxjs";

import { db } from '../../../data/db';

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
