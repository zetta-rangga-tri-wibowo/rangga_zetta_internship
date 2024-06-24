export interface User {
  id: number;
  name: string;
  age: number;
  gender: string;
  email: string;
  position: string;
  maritalStatus: string;
  addresses: Address[];
}

export interface Address {
  address: string;
  zipCode: number;
  city: string;
  country: string;
}
