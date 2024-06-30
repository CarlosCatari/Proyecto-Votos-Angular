import { Component } from '@angular/core';
import { Link } from './link/link.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title2 = 'angular-links-votes-app';
  links: Link[];
  constructor(){
    this.links = [
      new Link('Angular', 'http://angular.io', 100),
      new Link('Google', 'http://google.com', 30),
      new Link('Github', 'https://github.com', 40)
    ];
    console.log(this.links)
  }
  addLink(title: HTMLInputElement, link: HTMLInputElement){
    this.links.push(new Link(title.value, link.value));
    title.value='';
    link.value='';
    return false;
  }
}
