import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  webSite() {
    alert('webSite');
  }

  cms() {
    alert('cms');
  }

  apps() {
    alert('apps');
  }

  adWords() {
    alert('adWords');
  }

  domain() {
    alert('domain');
  }

  hosting() {
    alert('hosting');
  }

}
