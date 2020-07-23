import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root'
})
export class CorsInterceptor implements HttpInterceptor {

  constructor() {
    console.log('CorsInterceptor created!');
  }


  intercept(req: HttpRequest<any>, next: HttpHandler) {
    let url = req.url;
    if (url.startsWith('/')) {
      url = environment.defaultHost + url;
    }

    const xhr = req.clone({
      url,
      withCredentials: true
    });
    return next.handle(xhr);
  }
}
