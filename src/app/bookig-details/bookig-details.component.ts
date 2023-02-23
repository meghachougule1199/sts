import { Component } from '@angular/core';
import { Booking } from '../booking';
import { BookingDetailsService } from '../booking-details.service';


@Component({
  selector: 'app-bookig-details',
  templateUrl: './bookig-details.component.html',
  styleUrls: ['./bookig-details.component.css']
})
export class BookigDetailsComponent {

__bookingService:BookingDetailsService;
status=false;
message='';
allBooking:Booking[]=[];
b:Booking = new Booking(0,'','','','','',0,'',800);

constructor(bookingService:BookingDetailsService)
{
  this.__bookingService= bookingService;
  this.allBooking=this.__bookingService.getBookingArr();
}


doFormSubmit(){
  console.log(this.b);
  this.__bookingService.Booking(this.b).subscribe(
    data=>{
      this.status=true;
      this.message="Passenger Added";
    },
    error=>{

    }
    
  )
  
}






readBooking(bookingId:string,name:string,dateOfBooking:string,sourceAirport:string,destinationAirport:string,timeOfBooking:string,numberOfPassenger:string,arrivalTime:string,ticketCost:string)
{
  console.log(sourceAirport+" "+destinationAirport);
  let bookingFromUser:Booking = new Booking(parseInt(bookingId),name,dateOfBooking,sourceAirport,destinationAirport,timeOfBooking,parseInt(numberOfPassenger),arrivalTime,parseInt(ticketCost));
  this.__bookingService.Booking(bookingFromUser);
  
}




}
