import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpErrorResponse, HttpHeaders, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
// imports


@Injectable()
/**
 * Custom interceptor
 * handles each http request 
 * and add some header
 * manage two cases
 * for vimeo calls 
 * add vimeo token and other element to its header
 * for other calls
 * add user token and other element to its header
 */
export class CustomHeaderInterceptor implements HttpInterceptor {

    /**
     * constructor
     * @param router 
     */
    constructor(private readonly router: Router) { }

    /**
     * handle every http request and add some headers
     * for vimeo apis add some headers including vimeo id
     * for other apis add our token-api to its headers
     * @param request 
     * add all possible 
     * types 
     * in the input 
     * and return value
     * @param next 
     */
    intercept(request: HttpRequest<any>,
        next: HttpHandler): Observable<HttpEvent<any>> {
        return this.handleAccess(request, next)
            .pipe(catchError((error: HttpErrorResponse) => {
                // in case of error
                // and status code is 401
                // clear localstorage
                // redirect to login page
                console.log(error);
                if (error.status === 401) {
                    localStorage.clear();
                    this.router.navigate(['/login']);
                }
                return throwError('Something bad happened; please try again later.');
            }));
    }
    /**
     * utility to add 
     * some necessary 
     * header to the request
     * @param request 
     * @param next 
     */
    private handleAccess(request: HttpRequest<any>,
        next: HttpHandler): Observable<HttpEvent<any>> {
        if (!localStorage.getItem('LoginToken') || request.url.toString().includes('/api/user/login') || request.url.toString().includes('/api/user/register')) {
            return next.handle(request);
        } else {
            const token = localStorage.getItem('LoginToken');
            return next.handle(
                request.clone({
                    setHeaders: { 'Authorization': `bearer ${token}`, 'Content-Type': 'application/json' }
                })
            );
        }

    }

}
