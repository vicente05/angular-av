import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../services/settings.service';

declare function customInitFunction(): any;

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
})
export class PagesComponent implements OnInit {

    public linkTheme = document.querySelector('#theme');

    public theme = localStorage.getItem('theme') || './assets/css/colors/default-dark.css';

    constructor( private settingService: SettingsService) { }

    ngOnInit(): void {
        this.linkTheme?.setAttribute('href', this.theme);
        customInitFunction();
    }

}
