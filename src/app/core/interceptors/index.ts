import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { CorsInterceptor } from './cors-interceptor.service';
import { ErrorInterceptor } from './error-interceptor.service';

/** Http interceptor providers in outside-in order */
export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: CorsInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
];
