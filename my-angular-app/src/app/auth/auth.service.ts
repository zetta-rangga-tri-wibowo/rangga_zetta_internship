import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable( {
  providedIn: 'root'
} )
export class AuthService {
  constructor( private apollo: Apollo ) {
  }

  loginUser( email: string, password: string ) {
    return this.apollo.mutate( {
      mutation: gql`
        mutation  {
          Login(email: "${email}", password: "${password}") {
            token
          }
        }
      `
    } ).pipe(
      map( ( resp ) => {
        this.userLogin( resp?.data );
        return resp;
      } ),
    );
  }

  userLogin( data: any ) {
    // validation
    localStorage.setItem( environment.tokenKey, JSON.stringify( data.Login.token ) );
  }

  logOut() {
    localStorage.removeItem( environment.tokenKey );
  }
}
