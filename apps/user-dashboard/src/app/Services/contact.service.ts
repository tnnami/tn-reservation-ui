
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Contacts } from "../Models/contacts.model";


 @Injectable({providedIn:"root"})
 export class Contactservice {

    private baseUrl = 'http://localhost:8080/api/';  
 
   constructor(private http:HttpClient) {
   }
 
   public getContacts():Observable<Contacts[]>{
     return this.http.get<Contacts[]>(`${this.baseUrl}`+"/Contacts");
   }

   public getSelectedContact():Observable<Contacts[]>{
     return this.http.get<Contacts[]>(`${this.baseUrl}`+"/Contacts?selected=true");
   }
 
   public searchContact(name:string):Observable<Contacts[]>{
     return this.http.get<Contacts[]>(`${this.baseUrl}`+"/Contacts?name_like="+name);
   }

   
   public delete(id:number):Observable<void>{
      return this.http.delete<void>(`${this.baseUrl}`+"/Contacts/"+id);
   }
   public save(Contact:Contacts):Observable<Contacts>{
     return this.http.post<Contacts>(`${this.baseUrl}`+"/Contacts/",Contact);
   }
   public update(Contact:Contacts):Observable<Contacts>{
     return this.http.put<Contacts>(`${this.baseUrl}`+"/Contacts/"+Contact.id,Contact);
   }

   public getContactById(id:number):Observable<Contacts>{
     return this.http.get<Contacts>(`${this.baseUrl}`+"/Contacts/"+id);
   }
 
 }