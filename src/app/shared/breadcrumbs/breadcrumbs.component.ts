import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ActivationEnd, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent implements OnDestroy {

    public titulo!: string;
    public tituloSubs$!: Subscription;

    constructor( private router: Router, private route: ActivatedRoute  ) {
        this.tituloSubs$ = this.getArgumentosRuta().subscribe( ({titulo}) => {
            this.titulo = titulo;
            document.title = `Admin Pro-${titulo}`
        });

    }

    ngOnDestroy(): void {
        this.tituloSubs$.unsubscribe();
    }

    getArgumentosRuta(): Observable<any> {
        return this.router.events
            .pipe(
                filter( (event: any) => event instanceof ActivationEnd ),
                filter( (event: ActivationEnd) => event.snapshot.firstChild === null  ),
                map( (event: ActivationEnd) => event.snapshot.data )
            )

    }

}
