import { Injectable } from '@angular/core';
import { Apollo, gql } from "apollo-angular";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { School } from "./school.model";

@Injectable({
  providedIn: 'root'
})
export class SchoolService {

  constructor(private apollo: Apollo) { }

  getSchoolList(pagination?: object, sort?: object, filter?: object): Observable<School[]> {
    const variables = {
      pagination: pagination,
      sort: sort,
      filter: filter
    };
    return this.apollo
      .watchQuery<{ GetAllSchools: School[] }>({
        query: gql`
          query GetAllSchools(
            $pagination: PaginationInput
            $filter: SchoolFilterInput
            $sort: SchoolSorting
          ) {
            GetAllSchools(
              pagination: $pagination
              filter: $filter
              sorting: $sort
            ) {
              _id
              short_name
              long_name
              count_document
              school_address {
                city
                is_main_address
              }
              certifier_ats {
                _id
                short_name
                classes {
                  _id
                  name
                }
              }
              preparation_center_ats {
                rncp_title_id {
                  _id
                  short_name
                  classes {
                    _id
                    name
                  }
                }
              }
            }
          }
        `,
        variables,
        fetchPolicy: 'network-only',
      })
      .valueChanges.pipe(map((result) => result.data.GetAllSchools));
  }
}
