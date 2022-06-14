import { Component, OnInit } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user = ''
  constructor(private keycloackservice:KeycloakService) { }

  ngOnInit(): void {
     this.keycloackservice.getKeycloakInstance().subject

    this.initializeUserOptions()
    console.log(this.keycloackservice.getUsername())
  }



  initializeUserOptions():void{

    this.user = this.keycloackservice.getUsername();
    console.log(this.user)

  }

  logout():void{
    this.keycloackservice.logout()

  }

}
