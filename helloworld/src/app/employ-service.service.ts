import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployServiceService {

  constructor() { }

  getEmployees(){
    return [
      {"id" : 1, "name": "Alessandro", "lastName": "Ghilardi" },
      {"id" : 2, "name": "Daniela", "lastName": "Masino" }
    ];
  }

}
