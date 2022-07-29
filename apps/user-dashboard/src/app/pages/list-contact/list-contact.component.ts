import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from "rxjs";
import { Contactservice } from "./../../Services/contact.service";
import { Contacts } from "./../../Models/contacts.model";

@Component({
  selector: 'tn-reservation-ui-list-contact',
  templateUrl: './list-contact.component.html',
  styleUrls: ['./list-contact.component.css'],
})
export class ListContactComponent implements OnInit {
  contacts: Observable<Contacts[]> | undefined;

  constructor(private contactsService: Contactservice,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.contacts = this.contactsService.getContacts();
  }

  deleteContact(id: number) {
    this.contactsService.delete(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  contactDetails(id: number){
    this.router.navigate(['details', id]);
  }

  updateContact(id: number){
    this.router.navigate(['update', id]);
  }
}
