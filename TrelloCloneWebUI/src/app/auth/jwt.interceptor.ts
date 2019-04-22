import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { StorageService } from '../services/storage.service';
import { Router } from '@angular/router';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

    constructor(
        private storage: StorageService,
        private router: Router
        ) {
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (this.storage.AccessToken && this.storage.User) {
            const clonedReq = req.clone({
                setHeaders: {
                    Authorization: `Bearer ${this.storage.AccessToken}`
                }
            })

            return next.handle(clonedReq).pipe(
                tap(
                    success => {},
                    error => {
                        if (error.status == 401) {
                            this.storage.removeToken();
                            this.storage.removeUserDetail();
                            this.router.navigate([""]);
                        }
                    }
                )
            )
        }
        else {
            return next.handle(req.clone());
        }

    }
}