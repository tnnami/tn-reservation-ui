import { KeycloakService } from "keycloak-angular";

export function initializeKeycloak(keycloak: KeycloakService) : ()=> Promise<boolean> {
  return () =>
    keycloak.init({
      config: {
        url: 'http://localhost:8080/auth',
        realm: 'reservation',
        clientId: 'angular-app'
      },
      initOptions:{
          checkLoginIframe:true,
          checkLoginIframeInterval:25
      },
      loadUserProfileAtStartUp:true
    });
}