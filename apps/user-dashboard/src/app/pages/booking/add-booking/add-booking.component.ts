import { Component, OnInit } from '@angular/core';
import { Booking } from '../../../Models/booking.model';
import { BookingService } from '../../../Services/booking.service';

@Component({
  selector: 'tn-reservation-ui-add-booking',
  templateUrl: './add-booking.component.html',
  styleUrls: ['./add-booking.component.css'],
})
export class AddBookingComponent implements OnInit {
  booking: Booking = {
    teamId: "",
    state: false,
    id: 0,
   
  };
  submitted = false;

  constructor(private bookingservice: BookingService) { }

  ngOnInit(): void {
  }

  saveBooking(): void {
    const data = {
      state: this.booking.state,
      teamId: this.booking.teamId
    };

    this.bookingservice.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }



}