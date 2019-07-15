import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';


import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class MyService {

  constructor(
    private http: HttpClient
  ) {

   }

   //methods
   showTodayDate() {
    let ndate = new Date();
    return ndate;
 }

 getData ()  {
  return this.http.get("http://jsonplaceholder.typicode.com/users")

}
}
