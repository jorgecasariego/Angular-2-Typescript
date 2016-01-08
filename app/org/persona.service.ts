import {Persona} from './persona';
import {PERSONAS} from './mock-personas';
import {Injectable} from 'angular2/core';

@Injectable()
export class PersonaService {
	getPersonas() {
		return Promise.resolve(PERSONAS);
	}

	// See the "Take it slow" appendix
	getPersonasSlowly() {
		return new Promise<Persona[]>(resolve =>
			setTimeout(() => resolve(PERSONAS), 2000) // 2 seconds
		);
	}
}