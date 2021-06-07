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
import { EmptyToNullDirectiveDirective } from '../directives/empty-to-null-directive.directive';
//#endregion components


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    EmptyToNullDirectiveDirective,
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
