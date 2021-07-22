import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Geo {
  lat: string;
  lng: string;
}

export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

export interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}

@Injectable()
export class UserService {
  user$ = this.http.get<User>('https://jsonplaceholder.typicode.com/users/1');

  constructor(private http: HttpClient) {}
}
