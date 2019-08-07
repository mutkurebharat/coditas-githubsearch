import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { apiURLS } from '../constants/config';

@Injectable({
  providedIn: 'root'
})
export class GitServiceService {

  BASEURL = 'https://api.github.com/';

  constructor(private http: HttpClient) { }

  public getUsersBySearch(searchKey: string): Observable<any> {
    return this.http.get(`${this.BASEURL}${apiURLS.search}?q=${searchKey}`);
  }
  public getReposOfUser(username: string): Observable<any> {
    return this.http.get(`${this.BASEURL}${apiURLS.users(username)}`);
  }
  public getAny(url: string): Observable<any> {
    return this.http.get(`${url}`);
  }
}
