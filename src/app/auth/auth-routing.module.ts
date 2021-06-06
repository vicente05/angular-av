import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


//#region components
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

//#endregion components

const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'register',
        component: RegisterComponent
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
