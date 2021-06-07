import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

    public registerForm = this.fb.group({
        email: [ null, Validators.required],
        nombre: [ null, Validators.required],
        password: [ null , Validators.required],
        password2: [ null ],
        terms: [false]
    });

    constructor(
        private fb: FormBuilder,
    ) { }

    ngOnInit(): void {
    }

    register(){
        console.log(this.registerForm.value)
    }

}
