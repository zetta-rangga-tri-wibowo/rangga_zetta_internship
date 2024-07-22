import { Injectable } from '@angular/core';
import { Apollo, gql } from "apollo-angular";
import { Observable } from "rxjs";
import { RNCP } from "../rncp-title/rncp-title.model";
import { map } from "rxjs/operators";
import { Student } from "./student.model";
import { IPagination } from "../global.model";

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  constructor(private apollo: Apollo) {
  }

  getStudent(
    pagination: IPagination = {
    page: 0,
    limit: 10
    },
    sort?: any
  ): Observable<Student[]> {
    return this.apollo
    .watchQuery<{ GetAllStudents: Student[] }>({
      query: gql`
          query GetAllStudents($pagination: PaginationInput, $sort: StudentSorting) {
            GetAllStudents(pagination: $pagination, sorting: $sort) {
              group_details {
                name
                test {
                  name
                }
              }
              postal_code_of_birth
              count_document
              incorrect_email
              _id
              civility
              first_name
              last_name
              email
              photo
              date_of_birth
              place_of_birth
              tele_phone
              academic_journey_id {
                diplomas {
                  diploma_photo
                }
              }
              createdAt
              certificate_issuance_status
              identity_verification_status
              is_photo_in_s3
              photo_s3_path
              is_thumbups_green
              status
              student_title_status
              school {
                _id
                short_name
              }
              rncp_title {
                _id
                short_name
              }
              current_class {
                _id
                name
              }
              final_transcript_id {
                _id
                status
                final_transcript_status
                certification_status
                jury_decision_for_final_transcript
                input_final_decision_status
                is_validated
                student_decision
                after_final_retake_decision
                has_jury_finally_decided
                retake_test_for_students {
                  test_id {
                    _id
                  }
                }
              }
              user_id {
                _id
              }
              job_description_id {
                _id
                job_name
                job_description_status
              }
              problematic_id {
                _id
                problematic_status
              }
              mentor_evaluation_id {
                _id
                mentor_evaluation_status
              }
              employability_survey_ids {
                _id
                survey_status
                validator
              }
              soft_skill_pro_evaluation {
                status
              }
              academic_pro_evaluation {
                status
              }
              specialization {
                _id
                name
                is_specialization_assigned
                is_specialization_assigned_to_block
              }
              companies {
                start_date {
                  date
                }
                end_date {
                  date
                }
                company {
                  _id
                  company_name
                }
                status
                mentor {
                  _id
                  first_name
                  last_name
                  civility
                  email
                }
                category_insertion
                type_of_formation
              }
              admission_process_id {
                _id
              }
            }
          }
        `
    })
    .valueChanges.pipe(
      map(result => result.data.GetAllStudents)
    );
  }
}
