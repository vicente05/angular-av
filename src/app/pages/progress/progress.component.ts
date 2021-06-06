import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss']
})
export class ProgressComponent {

    progress1: number = 50;
    progress2: number = 50;

    get getProgress1(): string {
        return `${this.progress1}%`;
    }

    get getProgress2(): string {
        return `${this.progress2}%`;
    }

    cambioValorHijo( valor: number) {
        this.progress1 = valor;
    }


}
