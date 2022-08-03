
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Booking } from "../Models/booking.model";


 @Injectable({providedIn:"root"})
 export class BookingService {

    private baseUrl = 'http://localhost:8081/reservation';  
 
   constructor(private http:HttpClient) {
   }
 
   public getBooking():Observable<Booking[]>{
     return this.http.get<Booking[]>(`${this.baseUrl}`+"/all");
   }

   public getSelectedBooking():Observable<Booking[]>{
     return this.http.get<Booking[]>(`${this.baseUrl}`+"/Booking?selected=true");
   }

   public searchBooking(name:string):Observable<Booking[]>{
     return this.http.get<Booking[]>(`${this.baseUrl}`+"/Booking?name_like="+name);
   }

   public setbooked(Book:Booking):Observable<Booking>{
     return this.http.put<Booking>(`${this.baseUrl}`+"/Booking/"+Book.id,{...Book,state:!Book.state});
   }
   
   public delete(id:number):Observable<void>{
      return this.http.delete<void>(`${this.baseUrl}`+"/Booking/"+id);
   }
   public save(Book:Booking):Observable<Booking>{
     return this.http.post<Booking>(`${this.baseUrl}`+"/Booking/",Book);
   }
   create(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}`, data);
  }
   public update(Book:Booking):Observable<Booking>{
     return this.http.put<Booking>(`${this.baseUrl}`+"/Booking/"+Book.id,Book);
   }

   public getBookdById(id:number):Observable<Booking>{
     return this.http.get<Booking>(`${this.baseUrl}`+"/Booking/"+id);
   }
 
 }