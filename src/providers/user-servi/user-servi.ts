import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the UserServiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserServiProvider {

  constructor(public http: HttpClient) {
    console.log('Hello UserServiProvider Provider!');
  }

  getUsers(){
    //console.log(this.http.get('https://randomuser.me/api/?results=15'));
    return this.http.get('https://randomuser.me/api/?results=15');
  }

  getLocations(){
    return this.http.get('http://localhost:3000/locations.json');
  }

}
