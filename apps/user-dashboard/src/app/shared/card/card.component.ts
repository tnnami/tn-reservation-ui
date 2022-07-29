import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tn-reservation-ui-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor() { }
  mode = '';
  results: any = [];

  ngOnInit(): void {
  }

  onChange(){
    this.results = [];
    this.mode = "";
  }

}
