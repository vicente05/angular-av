import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountSettingsComponent } from './account-settings/account-settings.component';

//#region components
import { DashboardComponent } from './dashboard/dashboard.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { PagesComponent } from './pages.component';
import { ProgressComponent } from './progress/progress.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';

//#endregion components


const routes: Routes = [
    {
        path: 'dashboard',
        component: PagesComponent,
        //canActivate: [AuthGuard],
        children: [
            {
                path: '',
                component: DashboardComponent,
                data: { titulo: 'Dashboard' }
            },
            {
                path: 'progress',
                component: ProgressComponent,
                data: { titulo: 'ProgressBar' }
            },
            {
                path: 'grafica1',
                component: Grafica1Component,
                data: { titulo: 'Gráficas #1' }
            },
            {
                path: 'account-settings',
                component: AccountSettingsComponent,
                data: { titulo: 'Ajuste de cuenta' }
            },
            {
                path: 'promesas',
                component: PromesasComponent,
                data: { titulo: 'Promesas' }
            },
            {
                path: 'rxjs',
                component: RxjsComponent,
                data: { titulo: 'RxJs' }
            },
        ]
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }

