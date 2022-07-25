
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Fields } from "../Models//fields.model";


 @Injectable({providedIn:"root"})
 export class FieldService {

    private baseUrl = 'http://localhost:8080/api/';  
 
   constructor(private http:HttpClient) {
   }
 
   public getFields():Observable<Fields[]>{
     return this.http.get<Fields[]>(`${this.baseUrl}`+"/Fields");
   }

   public getSelectedFields():Observable<Fields[]>{
     return this.http.get<Fields[]>(`${this.baseUrl}`+"/Fields?selected=true");
   }

   public getAvailableFields():Observable<Fields[]>{
     return this.http.get<Fields[]>(`${this.baseUrl}`+"/Fields?available=true");
   }
 
   public searchFields(name:string):Observable<Fields[]>{
     return this.http.get<Fields[]>(`${this.baseUrl}`+"/Fields?name_like="+name);
   }

   public setReservedd(Field:Fields):Observable<Fields>{
     return this.http.put<Fields>(`${this.baseUrl}`+"/Fields/"+Field.id,{...Field,selected:!Field.reserved});
   }
   
   public delete(id:number):Observable<void>{
      return this.http.delete<void>(`${this.baseUrl}`+"/Fields/"+id);
   }
   public save(Field:Fields):Observable<Fields>{
     return this.http.post<Fields>(`${this.baseUrl}`+"/Fields/",Field);
   }
   public update(Field:Fields):Observable<Fields>{
     return this.http.put<Fields>(`${this.baseUrl}`+"/Fields/"+Field.id,Field);
   }

   public getFieldById(id:number):Observable<Fields>{
     return this.http.get<Fields>(`${this.baseUrl}`+"/Fields/"+id);
   }
 
 }