import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../../environments/environment';

import {Observable, Subject} from 'rxjs';
import {tap} from 'rxjs/operators';

export interface Settings {
  linkRss: string;
}

@Injectable({
  providedIn: 'root'
})
export class RssService {

  changeRss = new Subject<void>();
  refreshRss = new Subject<void>();

  constructor(private _http: HttpClient) { }

  setRefreshRssSubject = () => {
    return this.refreshRss.next();
  }

  setChangeRssSubject = () => {
    return this.changeRss.next();
  }

  getRssFeedData = (url) => {
    const requestOptions: object = {
      observe: 'body',
      responseType: 'text',
    };
    return this._http.get<any>(url, requestOptions);
  }

  getRssLink = (): Observable<string> => {
    const route = '/api/settings/link-rss';
    return this._http.get<string>(`${environment.apiUrl}${route}`);
  }

  setRssLink = (rssLink) => {
    const route = '/api/settings/update-link-rss';
    this._http.post<Settings>(`${environment.apiUrl}${route}`, {rssLink: rssLink}).pipe(
        tap(() => this.setChangeRssSubject())
    )
        .subscribe(
        () => true,
        (err) => console.log(err)
    );
  }

}
