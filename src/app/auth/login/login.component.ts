import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

    public loginForm = this.fb.group({
        login: [ localStorage.getItem('login') || '', Validators.required],
        password: ["", Validators.required],
        remember: [localStorage.getItem('remember') || false]
    });

    constructor(
        private fb: FormBuilder,
        private router: Router
    ) { }

    ngOnInit(): void {}


    logearse(): void {
        console.log(this.loginForm.value)
        this.router.navigateByUrl('/dashboard')
    }
    //logearse(): void {
    //    console.log(this.loginForm.value)
    //    this._authService.login(this.loginForm.value).subscribe( data => {
    //        if (this.loginForm.get('remember')?.value) {
    //            localStorage.setItem('login', this.loginForm.get('login')?.value)
    //            localStorage.setItem('remember', this.loginForm.get('remember')?.value)
    //        } else {
    //            localStorage.removeItem('login');
    //            localStorage.removeItem('remember');
    //        }
    //        this.router.navigateByUrl('/dashboard');
    //    });
    //}

}
