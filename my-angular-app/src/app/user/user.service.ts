// *************** Angular Imports ***************
import { Injectable } from '@angular/core';
// *************** Apollo Angular Imports ***************
import { Apollo, gql } from 'apollo-angular';
// *************** Application Models Imports ***************
import { User } from './user.model';
// *************** RxJS Imports ***************
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  // *************** Variables ***************
  userList: User[] = []; // Stores the list of users

  // *************** Constructor ***************
  /**
   * @param apollo Apollo client service for GraphQL operations
   */
  constructor(private apollo: Apollo) {}

  // *************** Public Methods ***************
  /**
   * Fetches a list of users based on the provided filters and pagination.
   * @param page Pagination details, including page number and limit
   * @param sort Optional sorting criteria
   * @param filter Optional filter criteria
   * @param should_in_active_class Optional flag to filter active classes
   * @param status Optional user status filter
   * @param full_name Optional full name filter
   * @param created_date Optional creation date filter
   * @param title Optional array of titles to filter
   * @param class_name Optional array of class names to filter
   * @param school Optional array of schools to filter
   * @param user_type Optional array of user types to filter
   * @returns An observable of an array of users
   */
  getUser(
    page: { page: 0; limit: 10 },
    sort?: {},
    filter?: {},
    should_in_active_class?: boolean,
    status?: string,
    full_name?: string,
    created_date?: string,
    title?: string[],
    class_name?: string[],
    school?: string[],
    user_type?: string[]
  ): Observable<User[]> {
    return this.apollo
      .watchQuery<{ GetAllUsers: User[] }>({
        query: gql`
          query GetAllUsers(
            $page: PaginationInput
            $sort: UserSorting
            $should_in_active_class: Boolean
            $full_name: String
            $created_date: String
            $school: [ID!]
            $user_type: [ID!]
            $title: [ID!]
            $class_name: String
          ) {
            GetAllUsers(
              full_name: $full_name
              pagination: $page
              sorting: $sort
              should_in_active_class: $should_in_active_class
              created_date: $created_date
              school: $school
              user_type: $user_type
              title: $title
              class_name: $class_name
            ) {
              _id
              email
              civility
              first_name
              last_name
              students_connected {
                _id
              }
              entities {
                school {
                  _id
                  short_name
                }
                school_type
                group_of_schools {
                  _id
                  short_name
                }
                group_of_school {
                  _id
                  headquarter {
                    _id
                    short_name
                    preparation_center_ats {
                      rncp_title_id {
                        _id
                        short_name
                      }
                      class_id {
                        _id
                        name
                      }
                    }
                  }
                  school_members {
                    _id
                    short_name
                    preparation_center_ats {
                      rncp_title_id {
                        _id
                        short_name
                      }
                    }
                  }
                }
                titles_in_charge {
                  _id
                  short_name
                }
                assigned_rncp_title {
                  _id
                  short_name
                }
                class {
                  _id
                  name
                  jury_process_name
                }
                type {
                  _id
                  name
                }
                companies {
                  _id
                  company_name
                  company_name_2
                  company_name_3
                  school_ids {
                    _id
                    short_name
                    companies {
                      mentor_ids {
                        _id
                      }
                      company_id {
                        _id
                      }
                    }
                  }
                }
                entity_name
              }
              created_at
              user_status
              count_document
              status
            }
          }
        `,
        variables: {
          page,
          sort,
          filter,
          should_in_active_class,
          status,
          full_name,
          created_date,
          school,
          user_type,
          title,
          class_name,
        },
        fetchPolicy: 'network-only',
      })
      .valueChanges.pipe(map((result) => result.data.GetAllUsers));
  }

  /**
   * Retrieves the list of user types.
   * @returns An observable of an array of user types
   */
  getUseType(): Observable<User[]> {
    return this.apollo
      .watchQuery<{ GetAllUserTypes: any }>({
        query: gql`
          query getAllUserType {
            GetAllUserTypes {
              _id
              name_with_entity
              name
            }
          }
        `,
        variables: {},
        fetchPolicy: 'network-only',
      })
      .valueChanges.pipe(map((result) => result.data.GetAllUserTypes));
  }

  /**
   * Retrieves the list of titles for dropdown selection.
   * @returns An observable of an array of titles
   */
  getTitleDropdown(): Observable<User[]> {
    return this.apollo
      .watchQuery<{ GetTitleDropdownList: any }>({
        query: gql`
          query GetTitleDropdownList {
            GetTitleDropdownList {
              _id
              short_name
            }
          }
        `,
        variables: {},
        fetchPolicy: 'network-only',
      })
      .valueChanges.pipe(map((result) => result.data.GetTitleDropdownList));
  }

  /**
   * Retrieves the list of classes for dropdown selection.
   * @param rncp_ids Optional array of RNCP IDs to filter classes
   * @returns An observable of an array of classes
   */
  getClassesDropdown(rncp_ids?: string): Observable<any[]> {
    return this.apollo
      .watchQuery<{ GetClassDropdownList: any }>({
        query: gql`
          query GetClassDropdownList($rncp_ids: [ID]) {
            GetClassDropdownList(rncp_ids: $rncp_ids) {
              _id
              name
              class_active
            }
          }
        `,
        variables: {
          rncp_ids,
        },
        fetchPolicy: 'network-only',
      })
      .valueChanges.pipe(map((result) => result.data.GetClassDropdownList));
  }

  /**
   * Retrieves the list of schools for dropdown selection.
   * @param rncp_title_ids Required RNCP title IDs to filter schools
   * @param class_ids Optional array of class IDs to filter schools
   * @param class_names Optional array of class names to filter schools
   * @param school_type Optional school type to filter schools
   * @returns An observable of an array of schools
   */
  getSchoolDropdown(
    rncp_title_ids: string,
    class_ids?: string,
    class_names?: string[],
    school_type?: string
  ): Observable<any[]> {
    return this.apollo
      .watchQuery<{ GetSchoolDropdownList: any }>({
        query: gql`
          query GetSchoolDropdownList(
            $rncp_title_ids: [ID]
            $class_names: [String]
            $school_type: String
            $class_ids: [ID]
          ) {
            GetSchoolDropdownList(
              rncp_title_ids: $rncp_title_ids
              class_names: $class_names
              school_type: $school_type
              class_ids: $class_ids
            ) {
              _id
              short_name
            }
          }
        `,
        variables: {
          rncp_title_ids,
          class_names,
          school_type,
          class_ids,
        },
        fetchPolicy: 'network-only',
      })
      .valueChanges.pipe(map((result) => result.data.GetSchoolDropdownList));
  }

  /**
   * Registers a new user.
   * @param lang The language code for the registration
   * @param userInput The input data for the new user
   * @returns An observable of the registered user data
   */
  registerUser(lang: string, userInput: any): Observable<any[]> {
    return this.apollo
      .mutate<{ RegisterUser: any }>({
        mutation: gql`
          mutation registerUser($lang: String!, $userInput: UserInput) {
            RegisterUser(lang: $lang, user_input: $userInput) {
              _id
              civility
              first_name
              last_name
              email
            }
          }
        `,
        variables: {
          lang,
          userInput,
        },
      })
      .pipe(map((result) => result.data?.RegisterUser));
  }

  /**
   * Updates an existing user.
   * @param id The ID of the user to update
   * @param inputUser The input data for updating the user
   * @param lang The language code for the update (default is 'en')
   * @returns An observable of the update result
   */
  updateUser(id: string, inputUser: any, lang = 'en') {
    const UPDATE_USER_MUTATION = gql`
      mutation ($id: ID!, $lang: String!, $inputUser: UserInput!) {
        UpdateUser(_id: $id, lang: $lang, user_input: $inputUser) {
          _id
          email
          status
        }
      }
    `;

    return this.apollo.mutate({
      mutation: UPDATE_USER_MUTATION,
      variables: {
        id,
        inputUser,
        lang,
      },
    });
  }

  /**
   * Retrieves a single user by ID.
   * @param _id The ID of the user to retrieve
   * @param status Optional status to filter the user
   * @returns An observable of the user data
   */
  getOneUser(_id: string, status: any = null): Observable<any[]> {
    return this.apollo
      .watchQuery<{ GetOneUser: any }>({
        query: gql`
          query GetOneUser($_id: ID, $status: EnumStatus) {
            GetOneUser(_id: $_id, status: $status) {
              _id
              civility
              first_name
              last_name
              email
            }
          }
        `,
        variables: {
          _id,
        },
        fetchPolicy: 'network-only',
      })
      .valueChanges.pipe(map((result) => result.data.GetOneUser));
  }
}
