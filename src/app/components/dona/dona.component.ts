import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent implements OnInit {

    @Input() titulo: string = 'Sales';

    @Input('labels') labels: string[] = ['A','B','C'];
    @Input('data') data: number[] = [300, 50, 100];

    @Input('colors') backgroundColor: string[] = [ "#FF6384", "#36A2EB","#FFCE56"];
    @Input() hoverBackgroundColor: string[] = [ "#FF6384", "#36A2EB", "#FFCE56"]

    public dataDona!: { labels: string[], datasets: any[] }

    constructor(){ }

    ngOnInit(): void {
        this.dataDona = {
            labels: this.labels,
            datasets: [
                {
                    data: this.data,
                    backgroundColor: this.backgroundColor,
                    hoverBackgroundColor: this.hoverBackgroundColor
                }
            ]
        }
    }

}
