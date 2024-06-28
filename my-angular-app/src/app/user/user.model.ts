export interface User {
  id: number;
  name: string;
  dateBirth: Date;
  balance: number;
  addresses?: Address[];
}

export interface Address {
  address: string;
  zipCode: number;
  city: string;
  country: string;
}
