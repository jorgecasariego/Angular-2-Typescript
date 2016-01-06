import {Component} from 'angular2/core';

interface Persona {
	org_parte_id: number;
	id: number;
	nombres: string;
	apellidos: string;
}

@Component({
    selector: 'my-app',
    template: 	`<h1>{{titulo}}</h1> 
    			 <h2>{{persona.nombres}} {{persona.apellidos}} detalle!</h2> 

    			 <div><label>ID:     </label>{{persona.id}}</div>
				 <div>
				 	<label>Nombres: </label>
				 	<div><input [(ngModel)]="persona.nombres" placeholder="nombres"></div>
				 </div>

				 <br/>

				 <div>
				 	<label>Apellidos: </label>
				 	<div><input [(ngModel)]="persona.apellidos" placeholder="apellidos"></div>
				 </div>
				`;

})

export class AppComponent { 
	public titulo = 'Personas';

	public persona: Persona = {
		id: 1,
		nombres: "Jorge",
		apellidos: "Casariego"

	};
}