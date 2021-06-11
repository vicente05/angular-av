import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, interval, Subscription } from 'rxjs';
import { retry, take, map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [
  ]
})
export class RxjsComponent implements OnInit, OnDestroy {

    public obsInterval$!: Subscription

    constructor() { }

    ngOnDestroy(): void {
        this.obsInterval$.unsubscribe();
    }

    ngOnInit(): void {
        //this.retornaObservable().pipe( retry(2) ).subscribe(
        //    valor => console.log('Subs:', valor),
        //    error => console.error('Error:', error),
        //    () => console.info('Obs terminado')
        //);
       this.obsInterval$ = this.retornaIntervalo().subscribe( console.log);
    }

    retornaIntervalo(): Observable<number> {
        return interval(500).pipe( take(10), map( valor => valor+1), filter( valor => ( valor % 2 == 0) ) );
    }

    retornaObservable(): Observable<number> {
        let i = 0;
        return new Observable<number>( observer => {
            const interval = setInterval( () => {
                observer.next(i);
                if (i === 4) {
                    clearInterval(interval);
                    observer.complete()
                }
                if (i === 2) {
                    observer.error("pendiente del cambio")
                }
                i++;
            },500)
        })
    }

}
