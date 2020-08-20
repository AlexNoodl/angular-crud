import {Injectable} from "@angular/core";

import {Mate} from "./interface";
import Database from "../../assets/mates.json"

@Injectable({providedIn: "root"})
export class MatesService {
  public mates = Database

  constructor() {
  }

  getMates(): [] {
    return this.mates
  }

  getById(id: string) {
    return this.mates.filter(m => m.guid === id)
  }

  removeMate(id: string) {
    this.mates = this.mates.filter(m => m.guid !== id);
  }

  addMate(mate: Mate) {
    this.mates.push(mate);
  }

  updateMate(mate: Mate, id) {
    this.mates = this.mates.filter(m => m.guid !== id)
    this.mates.push(mate);
  }
}
