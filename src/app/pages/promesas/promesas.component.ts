import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
})
export class PromesasComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
        const promesa = new Promise((resolve, reject) => {
            resolve("hola mundo");
        })
        promesa.then( data => console.log(data));
        console.log("Fin del Init")
        this.getUsuarios().then( data => console.log(data));
    }

    getUsuarios(): Promise<any> {
        return new Promise((resolve, reject) => {
            fetch('https://reqres.in/api/users')
            .then( resp => resp.json())
            .then( body => resolve(body.data));

        })
    }

}
