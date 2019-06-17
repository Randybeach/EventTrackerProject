import { AltitudePipe } from './../../pipes/altitude.pipe';
import { DateSortPipe } from './../../pipes/date-sort.pipe';
import { LocationPipe } from './../../pipes/location.pipe';
import { Jump } from './../../models/jump';
import { JumpService } from './../../services/jump.service';
import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-jump-list',
  templateUrl: './jump-list.component.html',
  styleUrls: ['./jump-list.component.css']
})
export class JumpListComponent implements OnInit {

  jumps;
  numJumps = 0;
  newJump = new Jump();
  showJumpFormB = false;
  showEditFormB = false;
  fallen = 0;
  constructor(private jumpService: JumpService, private locationSort: LocationPipe, private dateSort: DateSortPipe, private altitudeSort: AltitudePipe) { }

  ngOnInit() {
    this.reload();
  }

  reload() {
    this.jumpService.index().subscribe(
      good => {
        this.jumps = good;
        this.numJumps = this.jumps.length;
        this.fallen = 0;
        this.calcFtFallen(this.jumps);
      },
      bad => {
        console.log('error on reload');
      }
    );
  }
  addJump(jump) {
    this.jumpService.create(jump).subscribe(
      good => {
        this.newJump = new Jump();
        this.showJumpForm();
        this.reload();
      }
    );
  }
  updateJump(jump) {
    this.jumpService.update(jump.id, jump).subscribe(
      good => {
        this.reload();
        this.showEditForm();
      }
    );
  }
  deleteJump(id) {
    this.jumpService.delete(id).subscribe(
      good => {
        this.reload();
      }
    );
  }
  showJumpForm() {
    if (this.showJumpFormB) {
      this.showJumpFormB = false;
    } else {
      this.showJumpFormB = true;
    }
    this.reload();
  }

  showEditForm() {
    return this.showEditFormB = !this.showEditFormB;
  }
  hideEditForm() {
    this.reload();
    return this.showEditFormB = false;
  }

  orderByLocation() {
    this.jumps = this.locationSort.transform(this.jumps);
  }

  calcFtFallen(jumps) {
    for (const jump of jumps) {
      this.fallen += jump.altitude;
    }
  }
  orderByDate(){
    this.jumps = this.dateSort.transform(this.jumps);
  }
  orderByAltitude(){
    this.jumps = this.altitudeSort.transform(this.jumps);
  }
}
