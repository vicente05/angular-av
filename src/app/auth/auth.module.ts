import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//#region plugins
import {ToastModule} from 'primeng/toast';
//#endregion plugins

//#region components
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

//#endregion components


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
  ],
  exports: [
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ToastModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class AuthModule { }
