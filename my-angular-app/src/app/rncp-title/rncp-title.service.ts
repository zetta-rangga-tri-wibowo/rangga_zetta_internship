import { Injectable } from '@angular/core';
import { Apollo, gql } from "apollo-angular";
import { Observable } from "rxjs";
import { RNCP } from "./rncp-title.model";
import { map } from "rxjs/operators";

@Injectable( {
  providedIn: 'root'
} )
export class RncpTitleService {
  constructor( private apollo: Apollo ) {
  }

  // dont call argument not use
  getRncpTitle(): Observable<RNCP[]> {
    return this.apollo
    .query<{ GetAllTitles: RNCP[] }>( {
      query: gql`
          query {
          GetAllTitles(is_published: true, should_have_class: true) {
              _id
              short_name
              long_name
              rncp_level
              rncp_level_europe
              is_published
              certifier {
                _id
                short_name
                logo
              }
              admtc_dir_responsible {
                _id
                first_name
                last_name
              }
            }
          }
        `
    } )
    .pipe(
      map( result => result.data.GetAllTitles )
    );
  }
}
