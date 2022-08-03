import { Injectable } from '@angular/core';
import { KeycloakInstance } from 'keycloak-js'; 
@Injectable({
  providedIn: 'root'
})
export class KeycloackSecurityService {

  constructor() { }
  init(){
    console.log("keycloack service initialized")
  }
}
