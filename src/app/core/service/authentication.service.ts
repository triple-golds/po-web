import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map, tap, switchMap, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

export interface UserInfo {
  username: string;
  isAuthenticated: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  // user: Observable<UserInfo>;
  private userInfo: UserInfo;
  userLinks: any;

  constructor(
    private router: Router,
    private http: HttpClient,
  ) {
    console.log('AuthenticationService created!');
  }

  get user(): Observable<UserInfo> {
    if (this.userInfo && this.userInfo.isAuthenticated) {
      return of(this.userInfo);
    }
    return this.getUserInfo();
  }

  login(username: string, password: string): Observable<UserInfo> {
    const formData = new FormData();
    formData.append('username', username);
    formData.append('password', password);

    return this.http.post<any>('/login', formData).pipe(
      tap(_ => localStorage.setItem('username', username)),
      switchMap(v => this.getUserInfo())
    );
  }

  logout() {
    this.userInfo = null;
    localStorage.removeItem('username');
    this.router.navigate(['/login']);
  }

  private getUserInfo(): Observable<UserInfo> {
    if (!localStorage.getItem('username')) {
      return of(null);
    }

    return this.http.get<UserInfo>(`/userInfoes/search/findByCurrentUser`)
      .pipe(
        tap((res: any) => {
          this.userLinks = res._links;
        }),
        map(userInfo => {
          userInfo.isAuthenticated = true;
          this.userInfo = userInfo;
          return userInfo;
        })
      );
  }



}
