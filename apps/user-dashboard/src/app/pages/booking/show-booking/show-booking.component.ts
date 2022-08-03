import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from "rxjs";
import { Booking } from '../../../Models/booking.model';
import { BookingService } from '../../../Services/booking.service';

@Component({
  selector: 'tn-reservation-ui-show-booking',
  templateUrl: './show-booking.component.html',
  styleUrls: ['./show-booking.component.css'],
})
export class ShowBookingComponent implements OnInit {
  bookings: Observable<Booking[]> | undefined;

  constructor(private bookingsService: BookingService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.bookings = this.bookingsService.getBooking();
  }

  delBooking(id: number) {
    this.bookingsService.delete(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  bookingDetails(id: number){
    this.router.navigate(['details', id]);
  }

  updateBooking(id: number){
    this.router.navigate(['update', id]);
  }
}
