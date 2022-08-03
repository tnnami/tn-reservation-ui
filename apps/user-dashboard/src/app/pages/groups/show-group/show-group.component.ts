import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Groups } from '../../../Models/group.model';
import { Groupservice } from '../../../Services/group.service';

@Component({
  selector: 'tn-reservation-ui-show-group',
  templateUrl: './show-group.component.html',
  styleUrls: ['./show-group.component.css'],
})
export class ShowGroupComponent implements OnInit {

  groups: Observable<Groups[]> | undefined;

  constructor(private groupservice: Groupservice,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.groups = this.groupservice.getGroups();
  }

  delGroups(id: number) {
    this.groupservice.delete(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  groupDetails(id: number){
    this.router.navigate(['details', id]);
  }

  groupUpdate(id: number){
    this.router.navigate(['update', id]);
  }
}
