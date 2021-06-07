import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IncrementadorComponent } from './incrementador/incrementador.component';
import { FormsModule } from '@angular/forms';
import { DonaComponent } from './dona/dona.component';

import { ChartModule } from 'primeng/chart';

@NgModule({
    declarations: [
        IncrementadorComponent,
        DonaComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        ChartModule
    ],
    exports: [
        IncrementadorComponent,
        DonaComponent
    ]
})
export class ComponentsModule { }
