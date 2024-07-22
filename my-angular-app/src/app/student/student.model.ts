export interface PaginationInput {
  page: number;
  limit: number;
}

export interface StudentSorting {
  field: string;
  order: 'ASC' | 'DESC';
}

export interface Diploma {
  diploma_photo: string;
}

export interface AcademicJourney {
  diplomas: Diploma[];
}

export interface School {
  _id: string;
  short_name: string;
}

export interface RncpTitle {
  _id: string;
  short_name: string;
}

export interface Class {
  _id: string;
  name: string;
}

export interface Test {
  _id: string;
}

export interface RetakeTestForStudent {
  test_id: Test;
}

export interface FinalTranscript {
  _id: string;
  status: string;
  final_transcript_status: string;
  certification_status: string;
  jury_decision_for_final_transcript: string;
  input_final_decision_status: string;
  is_validated: boolean;
  student_decision: string;
  after_final_retake_decision: string;
  has_jury_finally_decided: boolean;
  retake_test_for_students: RetakeTestForStudent[];
}

export interface User {
  _id: string;
}

export interface JobDescription {
  _id: string;
  job_name: string;
  job_description_status: string;
}

export interface Problematic {
  _id: string;
  problematic_status: string;
}

export interface MentorEvaluation {
  _id: string;
  mentor_evaluation_status: string;
}

export interface EmployabilitySurvey {
  _id: string;
  survey_status: string;
  validator: string;
}

export interface EvaluationStatus {
  status: string;
}

export interface Specialization {
  _id: string;
  name: string;
  is_specialization_assigned: boolean;
  is_specialization_assigned_to_block: boolean;
}

export interface Company {
  _id: string;
  company_name: string;
}

export interface Mentor {
  _id: string;
  first_name: string;
  last_name: string;
  civility: string;
  email: string;
}

export interface CompanyDetails {
  start_date: {
    date: string;
  };
  end_date: {
    date: string;
  };
  company: Company;
  status: string;
  mentor: Mentor;
  category_insertion: string;
  type_of_formation: string;
}

export interface AdmissionProcess {
  _id: string;
}

export interface Student {
  group_details: {
    name: string;
    test: {
      name: string;
    };
  };
  postal_code_of_birth: string;
  count_document: number;
  incorrect_email: boolean;
  _id: string;
  civility: string;
  first_name: string;
  last_name: string;
  email: string;
  photo: string;
  date_of_birth: string;
  place_of_birth: string;
  tele_phone: string;
  academic_journey_id: string;
  createdAt: string;
  certificate_issuance_status: string;
  identity_verification_status: string;
  is_photo_in_s3: boolean;
  photo_s3_path: string;
  is_thumbups_green: boolean;
  status: string;
  student_title_status: string;
  school: string;
  rncp_title: string;
  current_class: string;
  final_transcript_id: string;
  user_id: string;
  job_description_id: string;
  problematic_id: string;
  mentor_evaluation_id: string;
  employability_survey_ids: EmployabilitySurvey[];
  soft_skill_pro_evaluation: EvaluationStatus;
  academic_pro_evaluation: EvaluationStatus;
  specialization: Specialization;
  companies: CompanyDetails[];
  admission_process_id: AdmissionProcess;
}
