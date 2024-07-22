export interface User {
  _id: string;
  email: string;
  civility?: string;
  first_name: string;
  last_name: string;
  students_connected?: { _id: string }[];
  entities?: Entity[];
  created_at: string;
  user_status: string;
  count_document?: number;
  status?: string;
}

interface Entity {
  school?: {
    _id: string;
    short_name: string;
  };
  school_type?: string;
  group_of_schools?: {
    _id: string;
    short_name: string;
  }[];
  group_of_school?: GroupOfSchool;
  titles_in_charge?: {
    _id: string;
    short_name: string;
  }[];
  assigned_rncp_title?: {
    _id: string;
    short_name: string;
  }[];
  class?: {
    _id: string;
    name: string;
    jury_process_name?: string;
  };
  type?: {
    _id: string;
    name: string;
  };
  companies?: Company[];
  entity_name?: string;
}

interface GroupOfSchool {
  _id: string;
  headquarter?: {
    _id: string;
    short_name: string;
    preparation_center_ats?: {
      rncp_title_id: {
        _id: string;
        short_name: string;
      };
      class_id: {
        _id: string;
        name: string;
      };
    }[];
  };
  school_members?: {
    _id: string;
    short_name: string;
    preparation_center_ats?: {
      rncp_title_id: {
        _id: string;
        short_name: string;
      };
    }[];
  }[];
}

interface Company {
  _id: string;
  company_name: string;
  company_name_2?: string;
  company_name_3?: string;
  school_ids?: {
    _id: string;
    short_name: string;
    companies?: {
      mentor_ids?: { _id: string }[];
      company_id?: { _id: string };
    }[];
  }[];
}
