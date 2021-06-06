import { Component, OnDestroy, OnInit } from '@angular/core';
import { MessageService, PrimeNGConfig } from 'primeng/api';
import { HttpClient } from '@angular/common/http';
import { ErrorService } from './services/errors.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnDestroy, OnInit {

    private ngUnsubscribe = new Subject();

    constructor(
        private config: PrimeNGConfig,
        private http: HttpClient,
        private errorService: ErrorService,
        private messageService: MessageService,
        private router: Router
    ) {
        this.initializeErrors();
    }

    ngOnDestroy(){
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    }

    async ngOnInit() {
        const { primeng } = await this.http.get<any>('assets/i18n/es.json').toPromise();
        this.config.setTranslation({...primeng});
    }

    private initializeErrors() {
        this.errorService.getErrors().pipe( takeUntil(this.ngUnsubscribe)).subscribe( (errors) => {
            const message = errors.message || errors.error;
            this.messageService.add(
                {
                    severity:'error',
                    summary: 'Error',
                    detail: message || 'error desconocido'
                }
            )
            if (errors.message.includes("jwt expired")) {
                setTimeout(() => this.router.navigateByUrl('/login'), 700);
            }
        })
    }


}
