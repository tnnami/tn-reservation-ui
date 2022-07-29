
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Groups } from "../Models/group.model";


 @Injectable({providedIn:"root"})
 export class Groupservice {

    private baseUrl = 'http://localhost:8080/api/';  
 
   constructor(private http:HttpClient) {
   }
 
   public getGroups():Observable<Groups[]>{
     return this.http.get<Groups[]>(`${this.baseUrl}`+"/Groups");
   }

   public getSelectedGroup():Observable<Groups[]>{
     return this.http.get<Groups[]>(`${this.baseUrl}`+"/Groups?selected=true");
   }
 
   public searchGroup(name:string):Observable<Groups[]>{
     return this.http.get<Groups[]>(`${this.baseUrl}`+"/Groups?name_like="+name);
   }

   
   public delete(id:number):Observable<void>{
      return this.http.delete<void>(`${this.baseUrl}`+"/Groups/"+id);
   }
   public save(Group:Groups):Observable<Groups>{
     return this.http.post<Groups>(`${this.baseUrl}`+"/Groups/",Group);
   }
   public update(Group:Groups):Observable<Groups>{
     return this.http.put<Groups>(`${this.baseUrl}`+"/Groups/"+Group.id,Group);
   }

   public getGroupById(id:number):Observable<Groups>{
     return this.http.get<Groups>(`${this.baseUrl}`+"/Groups/"+id);
   }
 
 }