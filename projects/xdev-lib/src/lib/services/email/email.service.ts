import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';



@Injectable({
    providedIn: 'root'
  })

export class EmailService {
  constructor(private _http: HttpClient) { }

  existsInDb = (email: string): Observable<boolean> => {
    const route = '/api/public/users/check-email-exists';

    return this._http.get<boolean>(`${environment.apiUrl}${route}` + `/` + email);
  }
}
