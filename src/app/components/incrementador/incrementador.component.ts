import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
})
export class IncrementadorComponent {

    //@Input() progress: number = 40;
    @Input('valor') progress: number = 40;
    @Input() className: string = 'btn btn-primary';

    @Output() valorSalida: EventEmitter<number> = new EventEmitter();


    constructor() { }

    cambiarValor( valor: number ): void {
        if (this.progress >= 100 && valor >= 0) {
            this.valorSalida.emit(100);
            this.progress = 100;
            return;
        }
        if (this.progress <= 0 && valor <= 0) {
            this.valorSalida.emit(0);
            this.progress = 0;
            return;
        }

        this.progress = this.progress + valor;
        this.valorSalida.emit(this.progress);
    }

}
