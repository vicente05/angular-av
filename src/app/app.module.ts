import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

//#region modulos
import { AppRoutingModule } from './app-routing.module';
import { PagesModule } from './pages/pages.module';
import { AuthModule } from './auth/auth.module';
//#endregion modulos

//#region plugins
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MessageService } from 'primeng/api'
//#endregion plugins

//#region components
import { AppComponent } from './app.component';
import { NopagefoundComponent } from './errors/nopagefound/nopagefound.component';


//#endregion components

//#region interceptor
import { CustomInterceptor } from './interceptors/credentials.interceptor';
import { GlobalErrorHandler } from './interceptors/globalerror.interceptor';
import { ErrorService } from './services/errors.service';


//#endregion interceptor


@NgModule({
  declarations: [
    AppComponent,
    NopagefoundComponent,
  ],
  providers: [
    MessageService,
    ErrorService,
    {
        provide: HTTP_INTERCEPTORS,
        useClass: CustomInterceptor ,
        multi: true
    },
    {
        provide: HTTP_INTERCEPTORS,
        useClass: GlobalErrorHandler,
        multi: true
    }
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    PagesModule,
    AuthModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
