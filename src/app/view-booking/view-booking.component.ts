import { Component } from '@angular/core';
import { Booking } from '../booking';
import { BookingDetailsService } from '../booking-details.service';
import { BookingDto } from '../booking-dto';

@Component({
  selector: 'app-view-booking',
  templateUrl: './view-booking.component.html',
  styleUrls: ['./view-booking.component.css']
})
export class ViewBookingComponent {

  allBooking:BookingDto[]=[];

  constructor(private bookingService:BookingDetailsService)
  {

  }

  getBooking(destinationAirport:string){
    this.bookingService.getBookingByDestinationAirport(destinationAirport).subscribe(
      data=>{
        console.log("data :- "+data);
        
        this.allBooking = data;
      },err=>{
        console.log("error from spring ",err);
  
      } 
    );
  }

  getBooking1(dateOfBooking:string){
    this.bookingService.getBookingByDate(dateOfBooking).subscribe(
      data=>{
        console.log("data :- "+data);
        
        this.allBooking = data;
      },err=>{
        console.log("error from spring ",err);
  
      } 
    );
  }
  getBooking2(timeOfBooking:string){
    this.bookingService.getBookingByTime(timeOfBooking).subscribe(
      data=>{
        console.log("data :- "+data);
        
        this.allBooking = data;
      },err=>{
        console.log("error from spring ",err);
  
      } 
    );
  }


  getBooking3(name:string){
    this.bookingService.getBookingByName(name).subscribe(
      data=>{
        console.log("data :- "+data);
        
        this.allBooking = data;
      },err=>{
        console.log("error from spring ",err);
  
      } 
    );
  }

}
