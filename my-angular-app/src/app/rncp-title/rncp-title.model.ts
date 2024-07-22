export interface Certifier {
  _id: string;
  short_name: string;
  logo: string;
}

export interface AdmtcDirResponsible {
  _id: string;
  first_name: string;
  last_name: string;
}

export interface RNCP {
  _id: string;
  short_name: string;
  long_name: string;
  rncp_level: string;
  rncp_level_europe: string;
  is_published: boolean;
  certifier: Certifier;
  admtc_dir_responsible: AdmtcDirResponsible;
}
