import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styleUrls: ['./grafica1.component.scss']
})
export class Grafica1Component implements OnInit {

    // Doughnut 1, 2
    public doughnutChartLabels: string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
    public doughnutChartData: number[] = [350, 450, 100];
    public colors: string[] =  ['#6857E6', '#009FEE', '#F02059'];
    public titulo: string = 'Sales';
    // Doughnut 3, 4
    public doughnutChartLabels2: string[] = ['Ventas', 'En stock', 'Retirado'];
    public doughnutChartData2: number[] = [10, 15, 40];
    public colors2: string[] = ['#6857E6', '#009FEE', '#F02059']
    public titulo2: string = 'Prueba';


    constructor() { }

    ngOnInit(): void {
    }


}

