import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';




@Injectable({
  providedIn: 'root'
})
export class MyService {

  constructor(
    private http: HttpClient) {
   }

   //methods
   showTodayDate() {
    let ndate = new Date();
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return days[ndate.getDay()];
 }

 getData ()  {
  return this.http.get("http://jsonplaceholder.typicode.com/users")
}
}
