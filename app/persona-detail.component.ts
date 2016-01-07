import {Component} from 'angular2/core';
import {Persona} from './persona';

@Component({
	selector: 'persona-detail',
	template: `
				<div *ngIf="persona">
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
				</div>
			  `,
	inputs: ['persona']
})
export class PersonaDetailComponent {
	public persona: Persona;
}