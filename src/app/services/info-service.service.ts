import { Injectable } from '@angular/core';
import { HttpClientModule,HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { PeriodicElement } from '../student-information/student-information.component';

@Injectable({
  providedIn: 'root'
})
export class InfoServiceService {

  constructor(private http: HttpClient) { }

  
  getUser(): Observable<any>{
    return this.http.get<any[]>('https://localhost:44326/api/webApi')
  }

  saveUser(data: any): Observable<Object> {
    return this.http.post<any>('https://dev.socrai.com/api/register', data);
  }
  removeUser(id:number): Observable<Object> {
    return this.http.delete('http://localhost/restfulApi/post.php/id',);
  }
  
}
