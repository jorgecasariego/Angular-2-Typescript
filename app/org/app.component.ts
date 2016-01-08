import {Component, OnInit} from 'angular2/core';
import {Persona} from './persona';
import {PersonaDetailComponent} from './persona-detail.component'
import {PersonaService} from './persona.service';

@Component({
    selector: 'my-app',
    template: 	`<h1>{{titulo}}</h1> 
    			 <h2>Personas</h2>

				<ul class="personas">
				  <li *ngFor="#persona of personas" 
				  	[class.selected]="persona === personaSeleccionada"
				  	(click)="onSelect(persona)">

				    <span class="badge">{{persona.id}}</span> {{persona.nombres}} {{persona.apellidos}}
				  </li>
				</ul>

				<persona-detail [persona]="personaSeleccionada"></persona-detail>
				`,
	styles: [`
			  .selected {
			    background-color: #CFD8DC !important;
			    color: white;
			  }
			  .personas {
			    margin: 0 0 2em 0;
			    list-style-type: none;
			    padding: 0;
			    width: 10em;
			  }
			  .personas li {
			    cursor: pointer;
			    position: relative;
			    left: 0;
			    background-color: #EEE;
			    margin: .5em;
			    padding: .3em 0em;
			    height: 1.6em;
			    border-radius: 4px;
			  }
			  .personas li.selected:hover {
			    color: white;
			  }
			  .personas li:hover {
			    color: #607D8B;
			    background-color: #EEE;
			    left: .1em;
			  }
			  .personas .text {
			    position: relative;
			    top: -3px;
			  }
			  .personas .badge {
			    display: inline-block;
			    font-size: small;
			    color: white;
			    padding: 0.8em 0.7em 0em 0.7em;
			    background-color: #607D8B;
			    line-height: 1em;
			    position: relative;
			    left: -1px;
			    top: -4px;
			    height: 1.8em;
			    margin-right: .8em;
			    border-radius: 4px 0px 0px 4px;
			  }
			`],
	directives: [PersonaDetailComponent],
	providers: [PersonaService];

})

export class AppComponent implements OnInit{ 
	public titulo = 'Personas';
	public personas: Persona[];

	public personaSeleccionada: Persona;

	constructor(private _personaService: PersonaService) {}

	ngOnInit() {
		this.getPersonas();
	}

	onSelect(persona: Persona) {
		this.personaSeleccionada = persona;
	}

	getPersonas() {
		this._personaService.getPersonas().then(personas => this.personas = personas);
	}
}