import {Component} from 'angular2/core';
@Component({
    selector: 'my-app',
    template: '<h1>{{titulo}}</h1><h2>{{nombre}} details!</h2>'
})
export class AppComponent { 
	public titulo = 'Personas';
	public nombre = 'Jorge';
}