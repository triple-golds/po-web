import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RestLinkService {

  constructor() { }

  generateLink(url: string, param?: any) {
    const paramPos = url.indexOf('{?');
    if (paramPos >= 0) {
      return url.substring(0, paramPos);
    }
    return url;
  }
}
