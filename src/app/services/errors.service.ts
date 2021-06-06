import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ErrorService {
    private errors = new Subject<any>();

    constructor() { }

    addErrors( errors: any): void {
        this.errors.next(errors);
    }

    getErrors(): Observable<any> {
        return this.errors.asObservable()
    }
}
