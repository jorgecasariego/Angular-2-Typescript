import {Component} from 'angular2/core';

interface Persona {
	id: number;
	nombre: string;
}

@Component({
    selector: 'my-app',
    template: 	`<h1>{{titulo}}</h1> 
    			 <h2>{{persona.nombre}} detalle!</h2> 

    			 <div><label>ID:     </label>{{persona.id}}</div>
				 <div>
				 	<label>Nombre: </label>
				 	<div><input [(ngModel)]="persona.nombre" placeholder="nombre"></div>
				 </div>
				`;

})

export class AppComponent { 
	public titulo = 'Personas';

	public persona: Persona = {
		id: 1,
		nombre: "Jorge Casariego"
	};
}