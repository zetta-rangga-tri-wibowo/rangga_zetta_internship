interface Address {
  address1: string;
  address2?: string;
  postal_code?: string;
  city?: string;
  region?: string;
  country?: string;
  department?: string;
  is_main_address?: boolean;
}

interface RncpTitle {
  _id: string;
  short_name: string;
}

interface Class {
  _id: string;
  name: string;
}

interface PreparationCenter {
  rncp_title_id: RncpTitle;
  class_id: Class;
}

interface User {
  _id: string;
  email: string;
  first_name: string;
  last_name: string;
  civility: string;
}

interface CertifierClass {
  _id: string;
  name: string;
}

interface Certifier {
  _id: string;
  short_name: string;
  classes: CertifierClass[];
}

export interface SchoolFilter {
  school_id?: string;
  class_id?: string;
  class_name?: string;
  should_have_active_class?: boolean
}


export interface School {
  _id: string;
  short_name: string;
  long_name: string;
  school_siret: string;
  school_address?: Address[];
  preparation_center_ats?: PreparationCenter[];
  get_specific_users: User[];
  certifier_ats: Certifier[];
  count_document: number;
  class: string;
  status: string;
}
