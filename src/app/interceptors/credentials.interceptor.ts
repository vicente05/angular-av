import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class CustomInterceptor implements HttpInterceptor {

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let headers = new HttpHeaders({ 'Content-Type': 'application/json'})
        if (sessionStorage.getItem('token')) {
            headers = headers.append('Authorization', 'Bearer ' + sessionStorage.getItem('token'))
        }
        request = request.clone({ withCredentials: true, headers });
        return next.handle(request);
    }
}
