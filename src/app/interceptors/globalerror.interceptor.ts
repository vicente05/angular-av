import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable, throwError} from "rxjs";
import {catchError} from 'rxjs/operators';
import { ErrorService } from "../services/errors.service";

@Injectable()
export class GlobalErrorHandler implements HttpInterceptor {
    constructor( private errorService: ErrorService, private router: Router) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req).pipe(
            catchError(({error}: any) => {
                this.errorService.addErrors(error)
                return throwError(error);
            })
        )
    }
}
